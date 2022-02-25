import * as React from 'react';
import { Outlet } from 'react-router';
import Container from '../../node_modules/react-bootstrap/esm/Container';
import { Sidebar, Header } from './../components/organisms';
// import styles from './dashboard-admin.module.scss';

export const DashboardAdmin = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Header />
        <div className="body">
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
};
