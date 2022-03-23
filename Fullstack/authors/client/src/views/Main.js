import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api")
        .then((res)=>{
            console.log(res.data.authors);
            setAuthors(res.data.authors);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <h1>All Authors:</h1>
            <Link to={'/add'}>Add an author</Link>
            <AuthorList authors={authors} setAuthors={setAuthors} />
        </div>
    )
}
export default Main;