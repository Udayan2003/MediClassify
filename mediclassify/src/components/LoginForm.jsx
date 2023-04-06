import React, { useState } from "react";
import "../stylesheets/LoginForm.css"

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email", email);
    }

    return (
        <div className="auth-form-container">
            <form id="login-form" onSubmit={handleSubmit}>
                <label className="login-label" htmlFor="email">Email</label><br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br />
                <label className="login-label" htmlFor="password">Password</label><br />
                <input value={password} onChange={(p) => setPassword(p.target.value)} type="password" placeholder="********" id="password" name="password" /><br />
            </form>
            <div className="login-button-container">
                <span /><span /><span /><span />
                <button class="submit-button" form="login-form" type="submit">Submit</button>
            </div>

        </div>
    )
}