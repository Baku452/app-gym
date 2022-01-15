import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LayoutWeb from './web/layout/web-layout.component';
import WebHome from './web/Home/web-home.page';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DashboardView } from './instructor/components/views/dashboard.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebHome />}></Route>
        <Route path="instructor" element={<DashboardView />}></Route>
      </Routes>
    </div>
  );
}
export default App;
