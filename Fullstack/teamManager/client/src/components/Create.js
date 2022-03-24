import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Create = (props) => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([])
    const [preferredPosition, setPreferredPosition] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/player', {
            name,
            preferredPosition
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setPlayers([...players, res.data])
                navigate('/');
            })
            .catch(err=>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors);
            })  
    }



    return (
        <div>
            <h2>Add A Player</h2>
            <form onSubmit={onSubmitHandler}>
                { errors.name ? 
                    <p>{errors.name.message}</p>
                    : null
                }
                <label>Player Name:</label>
                <input type='text' onChange = {(e)=>setName(e.target.value)} value={name} />
                <br />
                { errors.preferredPosition ? 
                    <p>{errors.preferredPosition.message}</p>
                    : null
                }
                <label>Preferred Position:</label>
                <input type='text' onChange = {(e)=>setPreferredPosition(e.target.value)} value={preferredPosition} />
                <br />
                <input type='submit' />
            </form>
        </div>
    )
}


export default Create;