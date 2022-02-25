import React from 'react';

const AppFooter = () => {
  return (
    <footer>
      <div>
        <p>Todos Los Derechos Reservados</p>
        <span className="ms-1">&copy; 2021 team-3.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://makeitreal.camp/" target="_blank" rel="noopener noreferrer">
          Make It Real
        </a>
      </div>
    </footer>
  );
};
export default React.memo(AppFooter);
