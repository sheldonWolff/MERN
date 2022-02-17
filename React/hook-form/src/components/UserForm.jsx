import React, { useState } from 'react';

const UserForm = (props) => {
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
    };
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confrim Password: </label>
                    <input type="text" value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value) } />
                </div>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>
                    <label>First Name: </label> {firstname}
                </p>
                <p>
                    <label>Last Name: </label> {lastname}
                </p>
                <p>
                    <label>Email: </label> {email}
                </p>
                <p>
                    <label>Password: </label> {password}
                </p>
                <p>
                    <label>Confirm Password: </label> {confirmpassword}
                </p>
            </div>
        </div>

    )
}



export default UserForm;