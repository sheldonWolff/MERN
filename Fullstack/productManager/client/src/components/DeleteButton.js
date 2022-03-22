import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { id, successCallback } = props;
    const deleteAProduct = e => {
        console.log('deleting')
        axios.delete(`http://localhost:8000/api/delete/product/${id}`)
            .then(res => {
                console.log('deleted');
                successCallback()
            })
            .catch(err => console.log(err))
    }
    return (
        <button onClick={deleteAProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;

