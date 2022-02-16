import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ increasedAge, setIncreasedAge ] = useState(props.age);
    return (
        <div>
            <h2>{ props.lastname }, { props.firstname}</h2>
            <p>Age: { increasedAge }</p>
            <p>Hair Color: { props.haircolor }</p>
            <button onClick={ (event) => setIncreasedAge(increasedAge + 1)}>Birthday button for { props.firstname} { props.lastname}</button>
        </div>
    )
}

export default PersonCard;