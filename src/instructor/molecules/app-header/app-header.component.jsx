import './app-header.styles.scss';

import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

const AppHeader = () => {
  // const dispatch = useDispatch();
  // const sidebarShow = useSelector((state) => state.sidebarShow);
  //onClick={ () => dispatch({ type: 'set', sidebarShow: !sidebarShow }) }

  return (
    <div class="content__container">
      <header class="header">
        <div class="header__menu">
          <div class="menu__icon">
            <img
              src={require('./../../../assets/icons/instructor/hamburguer.svg').default}
              alt="icon search"
            />
          </div>
        </div>
        <div class="header__search">
          <div class="search">
            <div class="search__icon">
              <img
                src={require('./../../../assets/icons/instructor/search.svg').default}
                alt="icon search"
              />
            </div>
            <div class="search__input">
              <input type="text" placeholder="Buscar..." />
            </div>
            <button class="search__button">filtros</button>
          </div>
        </div>
        <div class="header__user">
          <div class="user__icons">
            <div class="notify">
              <img
                src={require('./../../../assets/icons/instructor/notify.svg').default}
                alt="icon notify"
              />
            </div>
          </div>
          <div class="user__profile">
            <div class="photo">
              <img
                src={require('./../../../assets/images/instructor/carla.jpg')}
                alt="profile photo"
              />
            </div>
            <div class="name">
              <span>Carla Atena</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default React.memo(AppHeader);
