import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/views/Main';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/api" default />
        <Route element={<Detail/>} path='/api/product/:id' />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
