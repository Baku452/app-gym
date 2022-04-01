import React, { useEffect, useState } from 'react';
import { Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.scss';
import { asideAdmin, asideInstructor, asideUser } from 'data/navigation/navAdmin';

// Images

const Sidebar = () => {
  const [itemsAside, setItemsAside] = useState(asideUser);

  const roles = window.sessionStorage.getItem('roles').split(',');

  useEffect(() => {
    if (roles.includes('admin')) setItemsAside(asideAdmin);
    if (roles.includes('instructor')) setItemsAside(asideInstructor);
  }, [roles]);
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_logo}>
        <img src="icons/LogoTrackG.png" alt="Logo Gym" />
      </div>
      <div className={styles.aside__content}>
        <Nav defaultActiveKey="/home" className="flex-column">
          {itemsAside
            ? itemsAside.map(item => (
                <Nav.Item key={item.id} className={styles.nav__item}>
                  <Link to={item.link} className={styles.custom_sidebar__nav_link}>
                    {item.title}
                  </Link>
                </Nav.Item>
              ))
            : null}
        </Nav>
      </div>
    </aside>
  );
};
export default React.memo(Sidebar);
