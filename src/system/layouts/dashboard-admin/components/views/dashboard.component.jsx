import * as React from 'react';
import { AppSidebar, AppFooter, AppHeader, AppContent } from './../molecules/index';
import './dashboard.styles.scss';

export const DashboardView = () => {
  return (
    <div className="dashboard">
      <AppSidebar />
      <div className="wrapper">
        <AppHeader />
        <div className="body">
          <AppContent />
        </div>
      </div>
    </div>
  );
};
