import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import DeleteButton from './DeleteButton';
const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                // console.log(res.data.products);
                setProduct(res.data.products);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <DeleteButton id={product._id} successCallback={()=>navigate("/")} />
        </div>
    )
}
export default Detail;

