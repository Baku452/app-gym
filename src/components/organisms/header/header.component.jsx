import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import styles from './header.module.scss';
// import { useSelector, useDispatch } from 'react-redux';
// Images
const hamburguer = '../assets/icons/instructor/hamburguer.svg';
const search = '../assets/icons/instructor/search.svg';
const bell = '../assets/icons/instructor/bell.svg';
const instructor1 = '../assets/images/instructor/carla.jpg';

const Header = () => {
  // const dispatch = useDispatch();
  // const sidebarShow = useSelector((state) => state.sidebarShow);
  //onClick={ () => dispatch({ type: 'set', sidebarShow: !sidebarShow }) }

  return (
    <Navbar className={styles.navbar}>
      <Container fluid>
        <div className="d-flex">
          <Navbar.Toggle className={styles.navbar__logo} aria-controls="offcanvasNavbar">
            <Image src={hamburguer} alt="Logo Gym" roundedCircle={true} />
          </Navbar.Toggle>

          <div className={styles.search}>
            <input
              className={styles.search__input}
              type="text"
              placeholder="Buscar en TrackG"
            />
            <Image style={{ width: '15px' }} src={search} alt="search in TrackG" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Image style={{ width: '25px' }} src={bell} alt="search in TrackG" />
          <div className="d-flex align-items-center">
            <Image
              style={{ width: '30px', height: '30px' }}
              src={instructor1}
              alt="Logo Gym"
              roundedCircle={true}
              className={styles.profile_photo}
            />
            <span className={styles.user_name}>Carla Atena</span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
export default React.memo(Header);
