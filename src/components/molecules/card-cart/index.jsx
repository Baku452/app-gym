import { Row, Card, Col, Button } from 'react-bootstrap';
import CartContext from 'context/CartContext';
import { useContext } from 'react';
import styles from './index.module.scss';

const CardCart = ({ item }) => {
  const { items, setItems } = useContext(CartContext);
  const handleRemove = () => {
    const index = items.findIndex(object => {
      return object._id === item._id;
    });
    console.log(items);
    items.splice(index, 1);
    console.log(items);
    setItems([...items]);
  };

  return (
    <Row className="mb-3 px-2">
      <Card className="p-2">
        <Row>
          <Col lg={4}>
            <img className={styles.image} alt={item.name} src={item.url_image} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={styles.title}>{item.name}</Card.Title>
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-between align-items-center">
            <h5>$/. {item.price}</h5>
            <Button className={`${styles.button} me-4`} onClick={handleRemove}>
              Remove
            </Button>
          </div>
        </Row>
      </Card>
    </Row>
  );
};

export default CardCart;
