import React, { useState } from "react";
import './Sign-Up.css';


export default function SignUp() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCheck() {
        const existingData = JSON.parse(localStorage.getItem('user')) || [];

        const newDoner = {
            name,
            mobile,
            email,
            password,
        };
        existingData.push(newDoner);

        localStorage.setItem('user', JSON.stringify(existingData));

        setEmail('');
        setMobile('');
        setName('');
        setPassword('');

    };


    return (
        <>
            <form>
                <div className="form-container">
                    <div>
                        <img src="https://i.pinimg.com/564x/3c/20/a1/3c20a16bccae26d05a27243f9259b86e.jpg"/>
                    </div>
                    <div>
                        <h1>Sign Up</h1>
                        Name: <input type="text"
                            placeholder="name"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            value={name} /><br />

                        Mobile: <input type="text"
                            placeholder="Mobile number"
                            onChange={(e) => {
                                setMobile(e.target.value)
                            }}
                            value={mobile} /><br />

                        Email: <input type="mail"
                            placeholder="email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email} /><br />

                        Password: <input type="password"
                            placeholder="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                        />
                        <button type="button" className="submit-btn" onClick={handleCheck}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}