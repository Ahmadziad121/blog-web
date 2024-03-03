import React from 'react';
import { useState, useEffect } from 'react';
import Start from './pages/start'
import Login from './pages/login'
import Register from './pages/register';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Start/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
