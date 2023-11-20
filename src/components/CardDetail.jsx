import React, { useEffect, useState } from 'react';
import { usePizza } from '../context/PizzaContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardDetail({ id }) {
  const { getPizzaById, dispatch, cart } = usePizza(); 
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizzaDetails = async () => {
      try {
        const pizzaDetails = await getPizzaById(id);
        setPizza(pizzaDetails);
      } catch (error) {
        console.error('Error fetching pizza details:', error);
      }
    };

    fetchPizzaDetails();
  }, [id, getPizzaById]);

  if (!pizza) {
    return <p>Cargando detalles de la pizza...</p>;
  }

  const { name, ingredients, img, price, desc } = pizza;

  const addToCart = () => {
    const existingPizza = cart.find((item) => item.id === id);

    if (existingPizza) {
      dispatch({ type: 'INCREMENT_QUANTITY', payload: existingPizza });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { img, id, name, price, quantity: 1 } });
    }
  };
  
  return (
    <Card className="cartas" style={{ fontFamily: 'Lucida Sans, sans-serif' }}>
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{
          maxWidth: '350px',
          maxHeight: '350px',
          width: 'auto',
          height: 'auto',
          marginTop: '60px',
          marginLeft: '60px',
        }}
        className="rounded"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <Card.Text>{desc}</Card.Text>
        <Card.Text>
          <strong>Ingredientes:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text>
          <strong>Precio:</strong> ${price}
        </Card.Text>
        <Button variant="danger" onClick={addToCart}>
        🛒
          Añadir
        </Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default CardDetail;
