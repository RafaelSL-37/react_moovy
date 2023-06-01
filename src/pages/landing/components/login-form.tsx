import React from "react";

const loginFormStyle = {
    display: 'flex',
    'flex-direction': 'column',
    width: '200px',
}


export default function LoginForm() {
    return (
        <div style={loginFormStyle}>
            <h1>Login</h1>
            Username: <input type={'text'} />
            Password: <input type={'password'} />
            <input type={'submit'} value='Enviar' />
        </div>
    )
}