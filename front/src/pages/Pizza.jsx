import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Inicia con null para q parta con algo

  // Función que consume la api para una tarjeta 
  const consultarApi = async () => {
    try {// configuramos con try catch para avisar errores
      const url = "http://localhost:5000/api/pizzas/p001";
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data); // Aqui se guardan  los datos de la API en el estado
    } catch (error) {
      console.error("Error fetching pizza data:", error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);//utilmo renglon vacio para q funcione solo en el montaje

  // Renderizamos solo si los datos están cargados
  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

//retornamos la misma tarjeta de cardpizza pero para una sola tarjeta
  return (
    <>
     
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'10px'}}> 
    <Card className="Card">
      <Card.Img className="imagenCard" variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>Pizza : {pizza.name}</Card.Title>
        <Card.Text>
          <p style={{fontSize:'12px'}}>{pizza.desc}</p><br></br>
          <p style={{ fontWeight: 'bold' }}>Ingredientes :</p>  <ul>
            {pizza.ingredients.map((ingredient,i) => (//mapeamos para los ingredientes
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <div className='precio'>
        <Card.Title className="CardTitle1">Precio : ${pizza.price}</Card.Title>
        <div className="d-flex justify-content-between"> 
        <Button variant="secondary">Ver mas &#x1F440;</Button>
        <Button variant="primary">Añadir &#x1F6D2;</Button>
        </div>
        </div>

      </Card.Body>
    </Card>
    </div>
    </>
  );
};

export default Pizza;