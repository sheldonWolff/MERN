import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const {product, setProduct} = props;
    const { removeFromDom, products, setProducts } = props;
    const deleteAProduct = (id) => {
        axios.delete(`http://localhost:8000/api/delete/product/${id}`)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        console.log('productList')
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
                        <Link to={`/product/${products._id}`}> {products.title}</Link>
                        <br/>
                        <Link to={`/product/edit/${products._id}`}>Edit</Link>
                        <button onClick={(e)=>{deleteAProduct(products._id)}}>Delete</button>
                        <hr/>
                    </div>
                    
                )    
                })
            }
        </div>
    )
}
export default ProductList;