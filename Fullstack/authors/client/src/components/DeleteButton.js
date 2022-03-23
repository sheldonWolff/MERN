import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { id, successCallback } = props;
    const deleteAnAuthor = e => {
        console.log('deleting')
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then(res => {
                console.log('deleted');
                successCallback()
            })
            .catch(err => console.log(err))
    }
    return (
        <button onClick={deleteAnAuthor}>
            Delete
        </button>
    )
}
export default DeleteButton;