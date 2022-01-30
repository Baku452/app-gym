import styles from './header.module.scss';

import React from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { Offcanvas } from 'bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// Images
import hamburguer from 'src/assets/icons/instructor/hamburguer.svg';

const Header = () => {
  // const dispatch = useDispatch();
  // const sidebarShow = useSelector((state) => state.sidebarShow);
  //onClick={ () => dispatch({ type: 'set', sidebarShow: !sidebarShow }) }

  return (
    <Navbar className={styles.navbar}>
      <Container>
        <div className="navbar__left">
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <Image
              className={styles.aside_logo_figure}
              styles={{ width: '25px' }}
              src={hamburguer}
              alt="Logo Gym"
              roundedCircle={true}
            />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="navbar__right"></div>
      </Container>
    </Navbar>
  );
};
export default React.memo(Header);

// <div class="content__container">
//   <header class="header">
//     <div class="header__menu">
//       <div class="menu__icon">
//         <img
//           src={
//             require('./../../../../../../assets/icons/instructor/hamburguer.svg')
//               .default
//           }
//           alt="icon search"
//         />
//       </div>
//     </div>
//     <div class="header__search">
//       <div class="search">
//         <div class="search__icon">
//           <img
//             src={
//               require('./../../../../../../assets/icons/instructor/search.svg')
//                 .default
//             }
//             alt="icon search"
//           />
//         </div>
//         <div class="search__input">
//           <input type="text" placeholder="Buscar..." />
//         </div>
//         <button class="search__button">filtros</button>
//       </div>
//     </div>
//     <div class="header__user">
//       <div class="user__icons">
//         <div class="notify">
//           <img
//             src={
//               require('./../../../../../../assets/icons/instructor/notify.svg')
//                 .default
//             }
//             alt="icon notify"
//           />
//         </div>
//       </div>
//       <div class="user__profile">
//         <div class="photo">
//           <img
//             src={require('./../../../../../../assets/images/instructor/carla.jpg')}
//             alt="profile photo"
//           />
//         </div>
//         <div class="name">
//           <span>Carla Atena</span>
//         </div>
//       </div>
//     </div>
//   </header>
// </div>
//
