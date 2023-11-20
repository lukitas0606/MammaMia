import CardPizza from './CardPizza';
import { usePizza } from '../context/PizzaContext';
import { Row, Col } from 'react-bootstrap';

function Gallery() {
    const { pizzas } = usePizza();
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
    {pizzas.map((pizza) => (
      <Col key={pizza.id}>
        <CardPizza pizza={pizza} />
      </Col>
    ))}
  </Row>
  );
}

export default Gallery;
