import { Form, Button, Row } from 'react-bootstrap';
import styles from './index.module.scss';

const NewsletterForm = () => {
  return (
    <Form>
      <Row>
        <Form.Group className="align-items-center col-8" controlId="newsletterForm">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button className={styles.form__button} variant="primary col-4" type="submit">
          Submit
        </Button>
      </Row>
    </Form>
  );
};

export { NewsletterForm };
