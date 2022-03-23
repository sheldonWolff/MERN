import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AuthorForm = (props) => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);
    const {initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/create', {
            name
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setAuthors([...authors, res.data])
                setName("");
                navigate('/');
                onSubmitProp({name});
            })
            .catch(err=>{
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
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name:</label><br/>
                    <input type="text" onChange = {(e)=>setName(e.target.value)} value={name}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    );
};
export default AuthorForm;