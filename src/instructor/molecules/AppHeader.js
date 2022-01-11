import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

const AppHeader = () => {
  // const dispatch = useDispatch();
  // const sidebarShow = useSelector((state) => state.sidebarShow);
  //onClick={ () => dispatch({ type: 'set', sidebarShow: !sidebarShow }) }

  return (
    <header>
      <div className="container">
        <div className="header-toggler" >
          <img src="#" alt="icon hamburguer" />
        </div>
        <div className="header-brand">
          <img src="#" alt="logo gym" />
        </div>
        <div className="header-nav-links">
          <ul>
            <li><a href="#">class</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">students</a></li>
          </ul>
        </div>
        <div className="header-nav-icons">
          <ul>
            <li><a href="#"><img src="#" alt="notify" /></a></li>
            <li><a href="#"><img src="#" alt="photo profile" /></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default React.memo(AppHeader);
