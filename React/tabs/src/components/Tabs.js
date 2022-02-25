import React, { useState } from 'react';

const Tabs = (props) => {
    const { index, setIndex} = props;
    const handleClick = (e) => {
        e.preventDefault();
        let indexSelected = e.currentTarget.value;
        setIndex(indexSelected)
    };
    return (
        <div>
            <div>
                <button onClick={ handleClick } value={0}>Tab 1</button>
                <button onClick={ handleClick } value={1}>Tab 2</button>
                <button onClick={ handleClick } value={2}>Tab 3</button>
            </div>
        </div>
    )
}


export default Tabs;