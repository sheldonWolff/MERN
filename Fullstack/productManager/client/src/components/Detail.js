import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const { removeFromDom, products, setProducts } = props;
    const deleteAProduct = (id) => {
        console.log('deleting')
        axios.delete(`http://localhost:8000/api/delete/product/${id}`)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data.products);
                setProduct(res.data.products);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e)=>{deleteAProduct(product._id)}}>Delete</button>
        </div>
    )
}
export default Detail;

