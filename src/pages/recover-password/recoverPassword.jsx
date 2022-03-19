import { FormRecoverPassword } from 'components/molecules/index';
import { LineDivider } from 'components/atoms/index';
import { Container, Row, Col } from 'react-bootstrap';

const RecoverPassword = () => {
  return (
    <>
      <Container className="h-80">
        <Row className="p-5">
          <Col>
            <h1 className="fw-bold">Recover Password</h1>
          </Col>
        </Row>
        <Row>
          <Col className="m-auto py-5 mb-5" lg={6}>
            <FormRecoverPassword />
            <LineDivider />
          </Col>
        </Row>
        <Row className="p-5 mb-5" />
      </Container>
    </>
  );
};

export default RecoverPassword;
