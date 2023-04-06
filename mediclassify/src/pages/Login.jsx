import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import '../stylesheets/Login.css';

export const Login = () => {
    const [onLoginForm, setOnLoginForm] = useState(true);

    return (
        <div className="form-parent">
            <Card className="text-white" style={{'background-color':'#010200'}}>
                {/* login card navbar */}
                <Card.Header>
                    <Nav fill variant="tabs" activeKey={onLoginForm?"login":"register"}>
                        <Nav.Item>
                            <Nav.Link eventKey="login" onClick={() => setOnLoginForm(true)}>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="register" onClick={() => setOnLoginForm(false)}>Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                {/* login card body */}
                {onLoginForm ? <LoginForm /> : <RegisterForm /> }
            </Card>
        </div>
    )
}