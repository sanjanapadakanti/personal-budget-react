import React from 'react';
//import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";

import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Menu/>
        <Hero/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
