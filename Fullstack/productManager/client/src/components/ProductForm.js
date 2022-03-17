import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = (props) => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    const {product, setProduct} = props;
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
                setProduct([...product, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err=>console.log(err));
    };
    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    );
};
export default ProductForm;