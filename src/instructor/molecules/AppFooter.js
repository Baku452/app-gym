import React from 'react';

const AppFooter = () => {
  return (
    <footer>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Todos Los Derechos Reservados
        </a>
        <span className="ms-1">&copy; 2021 team-3.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          MakeItReal
        </a>
      </div>
    </footer>
  );
};
export default React.memo(AppFooter);
