import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { DashboardView } from './instructor/views/DashboardView';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />}></Route>
-        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
         // <Route path="instructor" element={<DashboardView />}></Route>

export default App;
