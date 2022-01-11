import * as React from 'react';
import { AppSidebar, AppFooter, AppHeader, AppContent } from  './../molecules/index';

export const DashboardView = () => {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </>
  );
};
