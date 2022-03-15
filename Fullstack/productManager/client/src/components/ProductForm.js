import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description,
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    );
};
export default ProductForm;