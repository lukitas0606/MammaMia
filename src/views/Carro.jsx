import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Image } from 'react-bootstrap';
import { usePizza } from '../context/PizzaContext';

function Carrito() {
  const { cart, dispatch} = usePizza();
  const total = cart.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity;
    return { total: acc.total + itemTotal, itemTotals: { ...acc.itemTotals, [item.id]: itemTotal } };
  }, { total: 0, itemTotals: {} });

  return (
    <ListGroup variant="flush">
      {cart.map((item) => (
        <ListGroup.Item key={item.id}>
          <Image src={item.img} alt={item.name} rounded style={{ width: '100px', marginRight: '10px' }} />
          <strong style={{ marginLeft: '10px' }}>{item.name} </strong>
          <Button
            variant="danger"
            onClick={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item })}
          >
            -
          </Button>{' '}
          {item.quantity}{' '}
          <Button
            variant="success"
            onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item })}
          >
            +
          </Button>
          <span style={{ marginLeft: '10px' }}> ${total.itemTotals[item.id]}</span>
        </ListGroup.Item>
      ))}
      <h2>Total: ${total.total}</h2>
      <br />
      <Button variant="success" className="small-button">Ir a pagar</Button>
    </ListGroup>
  );
}

export default Carrito;

