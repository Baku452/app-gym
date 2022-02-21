import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebHome from './pages/Home/web-home.page';
import { DashboardAdmin } from './layout/dashboard-admin.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import { Resume, Class, Students, Blogs, Configs } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebHome />} />
        <Route path="instructor" element={<DashboardAdmin />}>
          <Route path="dashboard" element={<Resume />} />
          <Route path="class" element={<Class />} />
          <Route path="students" element={<Students />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="configs" element={<Configs />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
