import React, { useState } from "react";
import "../stylesheets/RegisterForm.css"   

export const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match, please re-enter your password.");
            return;
        }
    }

    return (
        <div className="auth-form-container-register">
            <form id="registration-form" onSubmit={handleSubmit}>
                    <label className="register-label" htmlFor="name">Full Name</label><br/>
                    <input value={name} onChange={(n) => setName(n.target.value)} type="text" placeholder="full name" id="name" name="name" /><br/>
                    <label className="register-label" htmlFor="email">Email</label><br/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br/>
                    <label className="register-label" htmlFor="password">Password</label><br/>
                    <input value={password} onChange={(p) => setPassword(p.target.value)} type="password" placeholder="********" id="password" name="password" /><br/>
                    <label className="register-label" htmlFor="password">Confirm Password</label><br/>
                    <input value={confirmPassword} onChange={(p) => setConfirmPassword(p.target.value)} type="password" placeholder="********" id="password" name="password" /><br/>
            </form>
            <button class="submit-button" form="registration-form" type="submit">Submit</button>
        </div>
    )
}