import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import styles from './sidebar.module.scss';

// Images
import avatar1 from 'assets/icons/instructor/gym.ico';
import navHome from 'assets/icons/instructor/nav-home.svg';
import navClass from 'assets/icons/instructor/nav-class.svg';
import navStudents from 'assets/icons/instructor/nav-students.svg';
import navBlogs from 'assets/icons/instructor/nav-blog.svg';
import navConfig from 'assets/icons/instructor/nav-config.svg';
import { Link } from 'react-router-dom';

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
