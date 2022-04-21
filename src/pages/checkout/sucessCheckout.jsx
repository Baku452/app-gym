import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SucessCheckout = () => {
  return (
    <>
      <Container>
        <Row className="p-5">
          <Col className="text-center">
            <BsPatchCheckFill size={150} />
            <h1 className="fw-bold p-5 m-5">Payment Sucessfully </h1>
            <p>
              You order is confirmed. You will receive an order confirmation as soon as
              possible. Thanks
            </p>
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="text-center">
            <Link to="/shop">
              <Button className="me-4">Continue Shopping</Button>
            </Link>
            <Link to="/">
              <Button variant="secondary" to="/shop">
                Go Home
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SucessCheckout;
