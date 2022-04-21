/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Col, Row } from 'react-bootstrap';
import styles from './index.module.scss';

const WebFooter = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container>
        <Row className="p-5">
          <Col lg={4}>
            <img alt="logo" href="/" src="/icons/LogoTrackG.png"></img>
          </Col>
          <Col>
            <h5>Shop</h5>
            <ul>
              <li>
                <a href="#">On Sale</a>
              </li>
              <li>
                <a href="#">Health & Nutrition</a>
              </li>
              <li>
                <a href="#">Implements</a>
              </li>
              <li>
                <a href="#">All Products</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Information</h5>
            <ul>
              <li>
                <a href="#">Membership</a>
              </li>
              <li>
                <a href="#">Discounts</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Customer Service</h5>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { WebFooter };
