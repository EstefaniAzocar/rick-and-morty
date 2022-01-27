import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './componentes/Home/Home'
import {Characters} from './componentes/Characters/Characters'
import { Episodes } from './componentes/Episodes/Episodes';
import { NavBar } from './componentes/Nav/NavBar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}> 
        <Route path='/' element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


