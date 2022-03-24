import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    
    const {id, successCallback} = props;
    
    const deleteAPlayer = e => {
        console.log('deleting')
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then(res => {
            console.log('deleted');
            successCallback()
        })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <button onClick={deleteAPlayer}>
                Delete
            </button>
        </div>
    )
}

export default DeleteButton;