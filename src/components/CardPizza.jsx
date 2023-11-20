import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { usePizza } from '../context/PizzaContext';

function CardPizza({ pizza }) {
  const { id, name, ingredients, img, price } = pizza;
  const { cart, dispatch } = usePizza();

  const addToCart = () => {
    const existingPizza = cart.find((item) => item.id === id);

    if (existingPizza) {
      dispatch({ type: 'INCREMENT_QUANTITY', payload: existingPizza });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { img, id, name, price, quantity: 1 } });
    }
  };


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <hr />
        <Card.Text>
          <strong>Ingredientes:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text>
          <strong> ${price}</strong>
        </Card.Text>
        <Button variant="primary">
          <Link to={`/pizza/${id}`} className="navbar-brand">
            Ver más
          </Link>{' '}
          👀
        </Button>
        <Button variant="danger" onClick={addToCart}>
          🛒 Añadir
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
