import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { usePizza } from '../context/PizzaContext';

function Menu() {
  const { cart } = usePizza();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Navbar bg="warning" data-bs-theme="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          🍕Pizzeria Mamma Mia!
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            🛒
            <Link to="/carrito" className="navbar-brand">${total}</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
