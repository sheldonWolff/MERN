import React, { useState } from 'react';

const Form = (props) => {
    const {colors, setColors} = props;
    const [valueInput, setValueInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let newColorList = [valueInput, ...colors]
        setColors(newColorList)
        setValueInput("")
    };


    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="color">Color</label>
                <input type='text'
                onChange={ (e) => setValueInput(e.target.value) }
                value={ valueInput }
                />
                <button>Add</button>
            </form>
        </div>

    )
}


export default Form;