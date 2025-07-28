import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Home from './pages/home';
import { Route, Routes } from 'react-router';
import RestaurantPage from './pages/RestaurantPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header /><Home /><Footer /></>} />
        <Route path='/restaurant/:slug' element={<><Header /><RestaurantPage /><Footer /></>} />
      </Routes>
    </div>
  );
}

export default App;
