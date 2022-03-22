import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
const ProductList = (props) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => setProduct(res.data.products));
    })
    const removeFromDom = id => {
        setProduct(product.filter(products => products._id !== id));
    }
    return (
        <div>
            {
                product.map((products, index) => {
                return (
                    <div key={index}>
                        <Link to={`/product/${products._id}`}> {products.title}</Link>
                        <br/>
                        <Link to={`/product/edit/${products._id}`}>Edit</Link>
                        <DeleteButton id={products._id} successCallback={()=>removeFromDom(products._id)} />
                        <hr/>
                    </div>
                    
                )    
                })
            }
        </div>
    )
}
export default ProductList;