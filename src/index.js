import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Header'; // Adjusted import path
import Footer from './components/Footer'; // Adjusted import path
import Home from './components/Home'; // Adjusted import path
import AboutUs from './components/People'; // Adjusted import path

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Home/> 
     <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
