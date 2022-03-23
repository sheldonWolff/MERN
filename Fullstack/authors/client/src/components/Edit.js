import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import DeleteButton from './DeleteButton';
const Edit = (props) => {
    const [name, setName] = useState("");
    const [updatedName, setUpdatedName] = useState("")
    const [authors, setAuthors] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
            .then((res) => {
                setUpdatedName(res.data.authors.name);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [id]);
    
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${id}`, {name: updatedName})
            .then(res => {
                console.log(updatedName);
                console.log(res);
                setUpdatedName(name);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
                console.log(err.response)
            })
    }
    
    return (
        <div>
            <h1>Update a Author</h1>
            {
                loaded && (
                <div>
                    <form onSubmit={updateAuthor}>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <p>
                            <label>Name:</label><br/>
                            <input type="text" onChange = {(e)=>setUpdatedName(e.target.value)} value={updatedName}/>
                        </p>
                        <input type="submit"/>
                        <DeleteButton id={authors._id} successCallback={()=>navigate("/")} />
                    </form>
                </div>
            )}
        </div>
    )
}
export default Edit;