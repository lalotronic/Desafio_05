import { useEffect, useState } from "react";
import { pizzaCart } from "../data/pizzas";
import  PizzaTarjeta  from "../components/PizzaTarjeta";

//1)Calculo del total de la compra
// 1.1)Recorrer el array de pizzaCart
// 1.2)Por cada pizza, multiplicar el precio por la cantidad
// 1.3)Sumar el resultado de la multiplicación

//2)Eliminar un producto del carrito
// 2.1)Recorrer el array de pizzaCart
// 2.2)Por cada pizza, comparar el id con el id del producto a eliminar
// 2.3)Si son iguales, eliminar el producto del array

// el total = (valor *  cantidad) por cada pizza

const Cart = () => {
  const [pizzaList, setPizzaList] = useState(pizzaCart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calcularTotal();
  }, [pizzaList]);
  //CICLO DE VIDA DE UN COMPONENTE
  //1) Montaje
  //2) Actualización
  //3) Desmontaje (X)

  const calcularTotal = () => {
    let totalPizza = 0;
    pizzaList.forEach((pizza) => {
      totalPizza += pizza.price * pizza.count;
    });
    // const totalPizza = pizzaList.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0); OTRA FORMA DE HACERLO

    setTotal(totalPizza);
  };

  const deletePizza = (id) => {
    const newPizzalist = pizzaList.filter((pizza) => {
      return pizza.id !== id;
    });
    setPizzaList(newPizzalist);
  };

  const handleIncrement = (id) => {
    // const pizza = pizzaList.find((pizza) => pizza.id === id); FORMA DE HACERLO CON FIND
    // if (pizza.count === 10) return;
    // pizza.count++; NO ES DEL TODO CORRECTO YA QUE ESTAMOS MUTANDO EL ESTADO
    // setPizzaList([...pizzaList]);
    const newPizzaList = pizzaList.map((pizza) => {
      if (pizza.id === id) {
        if (pizza.count === 10) return pizza;
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setPizzaList(newPizzaList);
  };

  const handleDecrement = (id) => {
    // const pizza = pizzaList.find((pizza) => pizza.id === id);
    // if (pizza.count === 1) {
    //   deletePizza(id);
    //   return;
    // }
    // pizza.count--;
    // setPizzaList([...pizzaList]); MISMO CASO QUE EL ANTERIOR
    setPizzaList((prevPizzaList) => {
      //FORMA CORRECTA DE HACERLO CON EL SETSTATE QUE RECIBE UNA FUNCION QUE RECIBE EL ESTADO ANTERIOR
      return prevPizzaList.map((pizza) => {
        if (pizza.id === id) {
          if (pizza.count === 1) {
            deletePizza(id);
            return pizza;
          }
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      });
    });
  };
  return (
    <div>
      <h1>Carrito de compras</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <h2 style={{ marginRight: '20px' }}>
    Total: <span style={{ color: 'red' }}>${total}</span>
  </h2>
  <button
    style={{
      backgroundColor: '#7f8c8d',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer'
    }}
  >
    PAGAR
  </button>
</div>
      <div className="row">
        {pizzaList.slice(0, 3).map((pizza) => (
          <div className="col-4" key={pizza.id}>
            <PizzaTarjeta
              pizza={pizza}
              increment={handleIncrement}
              decrement={handleDecrement}
            />
          </div>
        ))}
      </div>
    </div>
  );

};
export default Cart;
