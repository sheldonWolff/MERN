import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h2>{ props.name }</h2>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.haircolor }</p>
        </div>
    )
}

export default PersonCard;