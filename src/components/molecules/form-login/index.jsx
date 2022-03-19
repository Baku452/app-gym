import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DontAccount = () => {
  return (
    <div className="d-grid">
      <h3 className="text-center p-3 fw-bold">Don´t Have an Account ?</h3>
      <Link to="/sign-up">
        <Button className="mb-5 w-100" variant="outline-primary">
          SIGN UP FOR TRACKG
        </Button>
      </Link>
    </div>
  );
};

const FormLogin = () => {
  return (
    <Form>
      <Form.Group className="mb-4">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="your-email@example.com"></Form.Control>
        <Link to="/recover-password">Forgot Password?</Link>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Password </Form.Label>
        <Form.Control type="password" placeholder="Password"></Form.Control>
      </Form.Group>
      <div className="text-center">
        <Button className="mb-4 mx-0 px-5" variant="primary" type="submit">
          Log In
        </Button>
      </div>
    </Form>
  );
};

const FormSignUp = () => {
  return (
    <Form>
      <Form.Group className="mb-4">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="i.e TrackUser"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Password </Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"></Form.Control>
      </Form.Group>
      <Row>
        <Col md={12} lg={7}>
          <Form.Group className="mb-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control name="firstName" type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col md={12} lg={true}>
          <Form.Group className="mb-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lastName" type="text"></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-4">
        <Form.Label>Email </Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="email@trackg.com"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Phone </Form.Label>
        <Form.Control name="phone" type="text" placeholder="Phone number"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Col lg={12}>
          <Form.Label>Gender </Form.Label>
        </Col>
        <Form.Check type="radio" inline label="Male" name="gender" id="gender" />
        <Form.Check type="radio" inline label="Female" name="gender" id="gender" />
        <Form.Check
          type="radio"
          inline
          label="Prefer not to say"
          name="gender"
          id="gender"
        />
      </Form.Group>
      <div className="py-5">
        <p>By clicking on sign-up, you agree to Track G Terms and Conditions of Use.</p>
      </div>
      <div className="text-center">
        <Button className="mb-4 mx-auto px-5" variant="primary" type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

const FormRecoverPassword = () => {
  return (
    <Form>
      <Form.Group className="mb-4">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="your-email@example.com"></Form.Control>
      </Form.Group>
      <div className="text-center">
        <Button className="mb-4 mx-0 px-5" variant="primary" type="submit">
          Send E-mail
        </Button>
      </div>
    </Form>
  );
};

export { FormLogin, FormRecoverPassword, DontAccount, FormSignUp };
