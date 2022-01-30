import * as React from 'react';
import { Sidebar, Header, Content } from './../molecules/index';
import './dashboard-admin.styles.scss';

export const DashboardAdmin = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="wrapper">
        <Header />
        <div className="body">
          <Content />
        </div>
      </div>
    </div>
  );
};
