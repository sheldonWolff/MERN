import './App.css';
import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/views/Main';
import AuthorForm from './components/AuthorForm';
import Edit from './components/Edit';

function App() {
  // const [authors, setAuthors] = useState([]);
  // const [errors, setErrors] = useState([]);
  // const createAuthor = authorParam => {
  //   axios.post('http://localhost:8000/api/create', authorParam)
  //     .then(res=>{
  //       console.log(res);
  //       console.log(res.data);
  //       setAuthors([...authors, res.data])
  //     })
  //     .catch(err=>{
  //       setErrors(err.response.data.errors.name.message);
  //       console.log(errors)
  //     })
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<AuthorForm initialName="" removeFromDom/>} path="/add" />
          <Route element={<Edit/>} path='/edit/:id' />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
