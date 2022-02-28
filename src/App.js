import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayoutWeb } from 'layout/index';
import { DashboardAdmin } from './layout/dashboard-admin.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import { WebHome, Login, Resume, Courses, Students, Blogs, Configs } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route path="/" element={<WebHome />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="login" element={<Login />} /> */}
        </Route>
        <Route path="instructor" element={<DashboardAdmin />}>
          <Route path="dashboard" element={<Resume />} />
          <Route path="courses" element={<Courses />} />
          <Route path="students" element={<Students />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="configs" element={<Configs />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
