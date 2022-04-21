import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayoutWeb } from 'layout/index';
import { DashboardAdmin } from './layout/dashboard/dashboard-admin.component';
import { loadStripe } from '@stripe/stripe-js';
import { UserContextProvider } from 'context/UserContext';
<<<<<<< HEAD
import { BlogFormContextProvider } from 'context/BlogFormContext';
import { CartContextProvider } from 'context/CartContext';
=======
import { FormContextProvider } from 'context/FormContext';

>>>>>>> 458aa0ff18daac510a0138318526824cb492a902
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
  Products,
  NewBlog,
  NewCourse,
  SlugBlog,
  Checkout,
  SucessCheckout,
  CancelCheckout,
} from './pages';

function App() {
  return (
    <UserContextProvider>
      <BlogFormContextProvider>
        <CartContextProvider>
          <Routes>
            <Route exact path="/" element={<LayoutWeb />}>
              <Route path="/" element={<WebHome />} />
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="recover-password" element={<RecoverPassword />} />
              <Route path="shop" element={<Shop />} />
              <Route path="blogs" element={<SlugBlog />}>
                <Route path=":blogTitle" element={<SlugBlog />} />
              </Route>
              <Route path="checkout" element={<Checkout />} />
              <Route path="checkout/success" element={<SucessCheckout />} />
              <Route path="checkout/cancel" element={<CancelCheckout />} />
            </Route>
            {/* Admin */}
            <Route path="dashboard" element={<DashboardAdmin />}>
              <Route path="/dashboard" element={<Resume />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/new" element={<NewCourse />} />
              <Route path="students" element={<Students />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/new" element={<NewBlog />} />
              <Route path="configs" element={<Configs />} />
              <Route path="products" element={<Products />} />
            </Route>
            {/* Instructor */}

            {/* Student */}
          </Routes>
        </CartContextProvider>
      </BlogFormContextProvider>
    </UserContextProvider>
  );
}
export default App;
