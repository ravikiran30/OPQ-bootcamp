
import './App.css';
// import Products from './Mycomponent/Products.js';
import Navbar from './Mycomponent/Navbar.js'
import Cart from './Mycomponent/Cart.js'
import Main from './Mycomponent/Main.js'

import React from 'react';
// import { useState } from 'react';


import {BrowserRouter, Routes,Route} from 'react-router-dom';




const App = () => {

  return (
    <divs>
      <BrowserRouter>
      <div className='text-[60px]'>Food App</div>
        <Navbar/>
        <Routes>
          <Route path='/' element={
            <>
            <Main />
            </>
          }/>

          <Route path='/cart' element={
            <>
            <Cart />
            </>
          }/>
        </Routes>
        </BrowserRouter>
    </divs>
   

       

  );
}

export default App;
