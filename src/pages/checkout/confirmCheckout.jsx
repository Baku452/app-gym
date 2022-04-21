import { Container, Row, Col } from 'react-bootstrap';
import CardCart from 'components/molecules/product-shop/index';
import { useContext } from 'react';
import CartContext from 'context/CartContext';

const Checkout = () => {
  const { items } = useContext(CartContext);

  return (
    <>
      <Container>
        <Row className="p-5">
          <Col>
            <h1 className="fw-bold">Confirm Checkout</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              {items.length > 0 ? items.map(item => <CardCart item={item} />) : null}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
