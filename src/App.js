import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Addproduct from './admin/Addproduct';
import Cart from './components/Cart';
import Dashbord from './admin/Dashbord';
import Allproduct from './admin/Allproduct';
import Updateproduct from './admin/Updateproduct';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/admindashboard' element={<Dashbord/>}/>
            <Route path='/allproduct' element={<Allproduct/>}/>
            <Route path='/updateproduct' element={<Updateproduct/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
