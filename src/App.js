import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayoutWeb } from 'layout/index';
import { DashboardAdmin } from './layout/dashboard/dashboard-admin.component';
import { UserContextProvider } from 'context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import {
  WebHome,
  Login,
  SignUp,
  RecoverPassword,
  Shop,
  Resume,
  Courses,
  Students,
  Blogs,
  Configs,
} from './pages';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route path="/" element={<WebHome />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="recover-password" element={<RecoverPassword />} />
          <Route path="shop" element={<Shop />} />
        </Route>
        <Route path="dashboard" element={<DashboardAdmin />}>
          <Route path="dashboard" element={<Resume />} />
          <Route path="courses" element={<Courses />} />
          <Route path="students" element={<Students />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="configs" element={<Configs />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
export default App;
