import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const AuthorList = (props) => {
    // const [authors, setAuthors] = useState([]);
    const { authors, setAuthors } = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                console.log(res.data)
                setAuthors(res.data.authors)
            })
    }, [])
    const removeFromDom = id => {
        setAuthors(authors.filter(author => author._id !== id));
    }
    return(
        <div>
            {
                authors.map((author, index) => {
                    return(
                        <div key={index}>
                            <p>{author.name}</p>
                            <Link to={`/edit/${author._id}`}>Edit</Link>
                            <DeleteButton id={author._id} successCallback={()=>removeFromDom(author._id)} />
                        </div>
                    )
                })
                
            }
        </div>
    )
}

export default AuthorList;