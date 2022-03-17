import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const {product, setProduct} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api")
        .then((res)=>{
            console.log(res.data.products);
            setProduct(res.data.products);
            
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <div>
            <h1>All Products:</h1>
            {
                product.map((products, index) => {
                return (
                    <div key={index}>
                        <Link to={`/api/product/${products._id}`}> {products.title}</Link>
                    </div>
                    
                )    
                })
            }
        </div>
    )
}
export default ProductList;