import { Card, Col, Button } from 'react-bootstrap';
import CartContext from 'context/CartContext';
import { useContext } from 'react';

const ProductShop = ({ item }) => {
  const { setItems } = useContext(CartContext);
  const handleAdd = () => {
    setItems(items => [...items, item]);
  };

  return (
    <Col lg={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src={item.url_image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Quantity: {item.quantity}</Card.Text>
          <div className="d-flex justify-content-between">
            <h5>$/. {item.price}</h5>
            <Button className="me-4" onClick={handleAdd} variant="secondary">
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductShop;
