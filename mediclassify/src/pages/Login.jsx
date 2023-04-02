import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const layout = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundColor: '#2f343e',
    flexDirection: 'column',
    color: 'white',
}

const textField = {
    position: 'relative',
    width: '20em',
    color: 'black',
}

const box = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30em',
    width: '23em',
    backgroundColor: '#2f343f',
    flexDirection: 'column',
    color: 'white',
    border: '1px solid #FFFFFF',
    borderRadius: '1em',
}
const regTag = {
    display: 'inline',
    paddingBottom: '1em',
}
const headTag = {paddingBottom: '0.5em'}

function Login() {
    return (
        <Form style={layout}>
            <div style={box}>
            <h2 style={headTag}><b>Login</b></h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" style ={textField}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" style={textField}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div style = {regTag}>
                Using this first time? <a href="/register">Register</a>
            </div>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </div>
        </Form>
    )
}
export default Login;