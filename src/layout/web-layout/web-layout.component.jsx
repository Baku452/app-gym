import { WebHeader, WebFooter } from 'components/index.js';
import { Outlet } from 'react-router-dom';

const LayoutWeb = () => {
  return (
    <>
      <WebHeader />
      <Outlet />
      <WebFooter />
    </>
  );
};

export { LayoutWeb };
