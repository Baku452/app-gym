import React from 'react';

const AppSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <img src="#" alt="image " />
      </div>
      <div className="sidebar-nav">
        <ul>
          <li><a href="#">blogs</a></li>
          <li><a href="#">videos</a></li>
          <li><a href="#">students</a></li>
          <li><a href="#">user</a></li>
        </ul>
      </div>
      <div className="sidebar-toggler">
        <img src="#" alt="image closed menu" />
      </div>
    </div>
  );
};
export default React.memo(AppSidebar);
