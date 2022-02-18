import React, { useState } from 'react';

const UserForm = (props) => {
    const[firstName, setFirstName] = useState("");
    // const[firstNameError, setFirstNameError] = useState("");
    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setFirstNameError("Name is required!");
    //     } else if(e.target.value.length < 2) {
    //         setFirstNameError("Name must be 2 characters or longer!");
    //     } else {
    //         setFirstNameError("");
    //     }
    // }
    
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
                    {
                        firstName.length > 0 && firstName.length < 3?
                        <p>First Name must be at least 2 characters long.</p>
                        :null
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                    {
                        lastName.length > 0 && lastName.length < 3?
                        <p>Last Name must be at least 2 characters long.</p>
                        :null
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    {
                        email.length > 0 && email.length < 5?
                        <p>Email must be at least 5 characters long.</p>
                        :null
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    {
                        password.length > 0 && password.length < 8?
                        <p>Password must be at least 8 characters long.</p>
                        :null
                    }
                </div>
                <div>
                    {
                        confirmPassword !== password?
                        <p>Passwords must match.</p>
                        :null
                    }
                    <label>Confrim Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>
                    <label>First Name: </label> {firstName}
                </p>
                <p>
                    <label>Last Name: </label> {lastName}
                </p>
                <p>
                    <label>Email: </label> {email}
                </p>
                <p>
                    <label>Password: </label> {password}
                </p>
                <p>
                    <label>Confirm Password: </label> {confirmPassword}
                </p>
            </div>
        </div>

    )
}



export default UserForm;