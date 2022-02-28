import styles from './index.module.scss';
import { FormLogin, DontAccount } from 'components/molecules/index';
import { LineDivider } from 'components/atoms/index';
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      {/* <LayoutWeb>Login</LayoutWeb> */}
      <Container>
        <Row className="p-5">
          <Col>
            <h1 className="fw-bold">Access</h1>
          </Col>
        </Row>
        <Row>
          <Col className="m-auto" lg={6}>
            <FormLogin />
            <LineDivider />
            <DontAccount />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
