import { FormSignUp } from 'components/molecules/index';
import { LineDivider } from 'components/atoms/index';
import { Container, Row, Col } from 'react-bootstrap';

const SignUp = () => {
  return (
    <>
      <Container>
        <Row className="p-5">
          <Col>
            <h1 className="fw-bold">Sign Up</h1>
          </Col>
        </Row>
        <Row>
          <Col className="m-auto" lg={6}>
            <FormSignUp />
            <LineDivider />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
