import { Container, Row, Col } from 'react-bootstrap';

const CancelCheckout = () => {
  return (
    <>
      <Container>
        <Row className="p-5">
          <Col>
            <h1 className="fw-bold">Payment Canceled </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CancelCheckout;
