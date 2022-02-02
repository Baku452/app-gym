import * as React from 'react';
import { Outlet } from 'react-router';
import { Sidebar, Header  } from './../molecules/index';
import styles from './dashboard-admin.module.scss';

export const DashboardAdmin = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Header />
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
