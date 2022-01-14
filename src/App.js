import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LayoutWeb from './web/layout/web-layout.component';
import WebHome from './web/Home/web-home.page';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <WebHome />
    </>
  );
}

export default App;
