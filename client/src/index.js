import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Logout from './Components/Logout';
import './index.css';

const root = document.getElementById('root'); // root id from index.html
const VirtualRoot = ReactDOM.createRoot(root); // Virtual Root (V DOM)

VirtualRoot.render(
  <Router>
    <div>
      <Header />
      <br />
    </div>
    <Routes>
      <Route path="/" element={<div>Home Page</div>} /> {/* Add a default route for "/" */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>
);
