import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 function CardPizza(props) {
  return (
    <Card className="Card">
      <Card.Img className="imagenCard" variant="top" src={props.pizza.img} />
      <Card.Body>
        <Card.Title>Pizza : {props.pizza.name}</Card.Title>
        <Card.Text>
          <p>Ingredientes :</p>  <ul>
            {props.pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <div className='precio'>
        <Card.Title className="CardTitle1">Precio : ${props.pizza.price}</Card.Title>
        <div className="d-flex justify-content-between"> 
        <Button variant="secondary">Ver mas &#x1F440;</Button>
        <Button variant="primary">Añadir &#x1F6D2;</Button>
        </div>
        </div>

      </Card.Body>
    </Card>
  )
}
export default CardPizza