import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';
const Update = (props) => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data.products);
                setProduct(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);
    
    const updateProduct = products => {
        axios.put('http://localhost:8000/api/product/edit/' + id, products)
            .then(res => {
                console.log(res);
                console.log(product)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {
                loaded && (
                <div>
                    <ProductForm 
                    onSubmitProp={updateProduct} 
                    initialTitle={product.title} 
                    initialPrice={product.price} 
                    initialDescription={product.description} />
                    <DeleteButton id={product._id} successCallback={()=>navigate("/")} />
                </div>
            )}
        </div>
    )
}
export default Update;

