import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import styles from './web-header.module.scss';

const WebHeader = () => {
  return (
    <Navbar bg="dark" expand="lg" className={styles.header}>
      <Container className="justify-content-between">
        <div>
          <Navbar.Brand href="#home">GYM-APP</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Button className="me-4">Login</Button>
              <Button variant="secondary">Sign-Up</Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default WebHeader;
