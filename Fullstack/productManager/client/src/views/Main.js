import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = () => {
    const [product, setProduct] = useState([]);
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
    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/product', productParam)
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProduct([...product, res.data])
            })
            .catch(err=>console.log(err));
    }
    return (
        <div>
            <h2>Product Manager</h2>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr />
            <h1>All Products:</h1>
            <ProductList product={product}  />
        </div>
    )
}
export default Main;