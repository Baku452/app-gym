import * as React from 'react';
import { AppSidebar, AppFooter, AppHeader, AppContent } from './../molecules/index';
import './dashboard.styles.scss';

export const DashboardView = () => {
  return (
    <div className="dashboard">
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
      </div>
    </div>
  );
};
