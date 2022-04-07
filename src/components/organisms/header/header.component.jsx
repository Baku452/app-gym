import React, { useContext } from 'react';
import { Container, Image, Navbar, Button, Nav } from 'react-bootstrap';
import styles from './header.module.scss';
import useUser from 'hooks/useUser';
import Context from 'context/UserContext';

// const hamburguer = '../assets/icons/instructor/hamburguer.svg';
// const search = '../assets/icons/instructor/search.svg';
const instructor1 = '../assets/images/instructor/carla.jpg';

const Header = () => {
  const { logout } = useUser();
  const { fullName } = useContext(Context);
  const handleLogout = e => {
    e.preventDefault();
    logout();
  };

  return (
    <Navbar bg="dark" variant="dark" className={styles.navbar}>
      <Container>
        <Nav.Link to="/">Website</Nav.Link>
        <Nav.Link to="/shop">Shop</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span>Signed in as : {fullName}</span>
            <Image
              style={{ width: '30px', height: '30px' }}
              src={instructor1}
              alt="Logo Gym"
              roundedCircle={true}
              className={styles.profile_photo}
            />
          </Navbar.Text>
          <Nav.Link>
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default React.memo(Header);
