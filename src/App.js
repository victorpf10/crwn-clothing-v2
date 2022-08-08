import React from 'react';
import './App.scss';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import  Shop from './components/shop/Shop';
import Auth from './components/auth/Auth';


function App() {
  return (
    <Routes >
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
