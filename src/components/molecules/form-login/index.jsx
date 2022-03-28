import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useUser from 'hooks/useUser';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

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
  const { login, isLogged } = useUser();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = values => {
    login(values);
  };

  useEffect(() => {
    if (isLogged) navigate('/dashboard');
  }, [isLogged, navigate]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-4">
        <Form.Label>Username </Form.Label>
        <Form.Control
          {...register('username', { required: true })}
          type="text"
          placeholder="username"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Password </Form.Label>
        <Form.Control
          {...register('password', { required: true })}
          type="password"
          placeholder="Password"></Form.Control>
        <Link to="/recover-password">Forgot Password?</Link>
      </Form.Group>
      <div className="text-center">
        <Button className="mb-4 mx-0 px-5" variant="primary" type="submit">
          Log In
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

export { FormLogin, FormRecoverPassword, DontAccount };
