import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import styles from './sidebar.module.scss';

// Images
import avatar1 from 'src/assets/icons/instructor/gym.ico';
import navHome from 'src/assets/icons/instructor/nav-home.svg'
import navClass from 'src/assets/icons/instructor/nav-class.svg'
import navStudents from 'src/assets/icons/instructor/nav-students.svg'
import navBlogs from 'src/assets/icons/instructor/nav-blog.svg'
import navConfig from 'src/assets/icons/instructor/nav-config.svg'

const Sidebar = () => {
  return (
    <div className={ styles.aside }>
      <div className={ styles.aside_logo }>
        <Image className={ styles.aside_logo_figure } src={avatar1} alt="Logo Gym" roundedCircle={true} />
      </div>
      <div class="aside__content">

        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Item className="d-flex">
            <Image src={navHome} alt="nav home"/>
            <Nav.Link href="/dashboard">Dasboard</Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex">
            <Image src={navClass} alt="nav class"/>
            <Nav.Link bsPrefix={ styles.nav_link } href="/class">Clases</Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex">
            <Image src={navStudents} alt="nav students"/>
            <Nav.Link href="/students">Estudiantes</Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex">
            <Image src={navBlogs} alt="nav blog"/>
            <Nav.Link href="/dashboard">Dasboard</Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex">
            <Image src={navConfig} alt="nav config"/>
            <Nav.Link href="/config">Configuraciones</Nav.Link>
          </Nav.Item>
        </Nav>

      </div>
    </div>
  );
};
export default React.memo(Sidebar);
