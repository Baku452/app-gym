import React from 'react';
import './app-sidebar.styles.scss';

const AppSidebar = () => {
  return (
    <div class="aside">
      <div class="aside__log">
        <img src={ require('./../../../assets/icons/instructor/gym.ico') } alt="logo_gym" />
      </div>
      <div class="aside__content">
        <nav class="aside__content__menu">
          <ul>
            <li class="active">
              <a href="#">Dasboard</a>
            </li>
            <li>
              <a href="#">Clases</a>
            </li>
            <li>
              <a href="#">Estudiantes</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Usuario</a>
            </li>
            <li>
              <a href="#">Configuraciones</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default React.memo(AppSidebar);
