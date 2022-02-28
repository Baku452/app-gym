import { Form, Button } from 'react-bootstrap';

const DontAccount = () => {
  return (
    <div className="d-grid">
      <h3 className="text-center p-3 fw-bold">Don´t Have an Account ?</h3>
      <Button className="mb-5" variant="outline-primary">
        SIGN UP FOR TRACKG
      </Button>
    </div>
  );
};

const FormLogin = () => {
  return (
    <Form>
      <Form.Group className="mb-4">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="your-email@example.com"></Form.Control>
        <a href="#">Forgot Password?</a>
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

export { FormLogin, DontAccount };
