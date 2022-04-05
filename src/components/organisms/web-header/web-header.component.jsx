import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import styles from './web-header.module.scss';
import { Link } from 'react-router-dom';

const WebHeader = () => {
  return (
    <Navbar sticky="top" bg="dark" expand="lg" className={styles.header}>
      <Container className="justify-content-between">
        <div>
          <Navbar.Brand>
            <Link to="/">
              <img alt="logo" src="icons/LogoTrackG.png"></img>
            </Link>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link to="/" className={styles.header__link}>
                Home
              </Nav.Link>
              {/* <Nav.Link className={styles.header__link} href="#link">
                About Us
              </Nav.Link>
              <Nav.Link className={styles.header__link} href="#link">
                Classes
              </Nav.Link>
              <Nav.Link className={styles.header__link} href="#link">
                Blog
              </Nav.Link> */}
              <Nav.Link to="/shop" className={styles.header__link}>
                Shop
              </Nav.Link>
              <Link to="/login">
                <Button className="me-4">Enter to gym</Button>
              </Link>
              <Link to="/sign-up">
                <Button variant="secondary">Sign-Up</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export { WebHeader };
