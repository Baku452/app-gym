import { Container, Col, Row } from 'react-bootstrap';
import styles from './web-footer.module.scss';

const WebFooter = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container>
        <Row>
          <Col lg={7}>Logo</Col>
          <Col>
            <h5>Columna 01</h5>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </Col>
          <Col>
            <h5>Columna 01</h5>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </Col>
          <Col>
            <h5>Columna 01</h5>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default WebFooter;
