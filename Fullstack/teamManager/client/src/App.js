import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Display from './components/Display';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Display/>} path="/" default />
          <Route element={<Create/>} path="/add/player" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
