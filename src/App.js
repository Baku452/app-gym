import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LayoutWeb from './web/layout/web-layout.component';
import WebHome from './web/Home/web-home.page';
import { DashboardAdmin } from './system/layouts/dashboard-admin/components/organisms/dashboard-admin.component';
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/style.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebHome />}></Route>
        <Route path="instructor" element={<DashboardAdmin />}></Route>
      </Routes>
    </div>
  );
}
export default App;
