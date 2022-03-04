import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Four from './components/Four';
import HelloColors from './components/HelloColors';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:number' element={<Four />}/>
        <Route path="/:word/:fontColor/:backgroundColor" element={ <HelloColors /> }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
