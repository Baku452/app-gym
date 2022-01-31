import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebHome from './web/Home/web-home.page';
import { DashboardAdmin } from './system/layouts/dashboard-admin/components/organisms/dashboard-admin.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import { Resume } from './system/layouts/dashboard-admin/components/molecules';
import { Class } from './system/layouts/dashboard-admin/components/molecules';
import { Blogs } from './system/layouts/dashboard-admin/components/molecules';
import { Students } from './system/layouts/dashboard-admin/components/molecules';
import { Configs } from './system/layouts/dashboard-admin/components/molecules';

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
