import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.scss';

// Images
const avatar1 = '../assets/icons/instructor/gym.ico';
const navHome = '../assets/icons/instructor/nav-home.svg';
const navClass = '../assets/icons/instructor/nav-class.svg';
const navStudents = '../assets/icons/instructor/nav-students.svg';
const navBlogs = '../assets/icons/instructor/nav-blog.svg';
const navConfig = '../assets/icons/instructor/nav-config.svg';

const Sidebar = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.aside_logo}>
        <Image
          className={styles.aside_logo_figure}
          src={avatar1}
          alt="Logo Gym"
          roundedCircle={true}
        />
      </div>
      <div class="aside__content">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Item className={styles.nav__item}>
            <Image src={navHome} alt="nav home" />
            <Link to="/instructor/dashboard" className="nav-link">
              Dasboard
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.nav__item}>
            <Image src={navClass} alt="nav class" />
            <Link to="/instructor/class" className="nav-link">
              Clases
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.nav__item}>
            <Image src={navStudents} alt="nav students" />
            <Link to="/instructor/students" className="nav-link">
              Estudiantes
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.nav__item}>
            <Image src={navBlogs} alt="nav blog" />
            <Link to="/instructor/blogs" className="nav-link">
              Blogs
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.nav__item}>
            <Image src={navConfig} alt="nav config" />
            <Link to="/instructor/configs" className="nav-link">
              Configuraciones
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};
export default React.memo(Sidebar);
