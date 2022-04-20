import { useState } from 'react';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import registerService from 'services/register';
import { useNavigate } from '../../../../node_modules/react-router/index';

const FormRegister = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const onSubmit = values => {
    setShowLoading(true);
    registerService({ values });
    setShowLoading(false);
    navigate('/login');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-4">
        <Form.Label>Username</Form.Label>
        <Form.Control
          {...register('username', { required: true })}
          name="username"
          type="text"
          placeholder="i.e TrackUser"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Password </Form.Label>
        <Form.Control
          {...register('password', { required: true })}
          name="password"
          type="password"
          placeholder="Password"></Form.Control>
      </Form.Group>
      <Row>
        <Col md={12} lg={7}>
          <Form.Group className="mb-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              {...register('firstName', { required: true })}
              name="firstName"
              type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col md={12} lg={true}>
          <Form.Group className="mb-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              {...register('lastName', { required: true })}
              name="lastName"
              type="text"></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-4">
        <Form.Label>Email </Form.Label>
        <Form.Control
          {...register('email', { required: true })}
          name="email"
          type="email"
          placeholder="email@trackg.com"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Phone </Form.Label>
        <Form.Control
          {...register('phone', { required: true })}
          name="phone"
          type="text"
          placeholder="Phone number"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Col lg={12}>
          <Form.Label>Gender </Form.Label>
        </Col>

        <Form.Check
          {...register('gender', { required: true })}
          type="radio"
          inline
          label="Male"
          key="radio1"
          value="male"
          name="gender"
          id="gender1"
        />
        <Form.Check
          {...register('gender', { required: true })}
          type="radio"
          inline
          label="Female"
          key="radio2"
          name="gender"
          value="female"
          id="gender2"
        />
        <Form.Check
          {...register('gender', { required: true })}
          type="radio"
          inline
          label="Prefer not to say"
          key="radio3"
          value="notsay"
          name="gender"
          id="gender3"
        />
      </Form.Group>
      <div className="py-5">
        <p>By clicking on sign-up, you agree to Track G Terms and Conditions of Use.</p>
      </div>
      <div className="text-center">
        <Button className="mb-4 mx-auto px-5" variant="primary" type="submit">
          { showLoading
            ? 
            <>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              /> 
              Loading...
            </>
            : 'Sign Up'
          }
        </Button>
      </div>
    </Form>
  );
};

export { FormRegister };
