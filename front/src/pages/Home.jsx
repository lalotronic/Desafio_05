//trabajo Enrique Paillavil G68
import { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        setError('Error al traer las pizzas');
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchPizzas();
    }, 3000);
  }, []);

  //SE MONTA
  // SE ACTUALIZA
  // SE DESMONTA

  return (
    <>
      <Header />
      <h1>Muestra información desde la API</h1>
      <div>
        {loading && <p>Loading...</p>}
        {error && !loading && <p>{error}</p>}
        {!loading && !error && pizzas.length === 0 && <p>No hay pizzas</p>}
        {!loading &&
          !error &&
          pizzas.length > 0 &&
          <div className="cards">
          {pizzas.map((pizza,index)=><CardPizza pizza = {pizza} key={index}/>)} 
          </div>
        }            
      </div>
    </>
  );
}
export default Home;
