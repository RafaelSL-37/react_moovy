import React from "react";
import { Link } from "react-router-dom";
import { ACCOUNT_CONTROL_MODAL_PHASE } from "../landing.constants";

const loginFormStyle = {
    display: 'flex',
    'flex-direction': 'column',
    width: '300px',
}

export default function AccountControlModalLoginForm({ toggleModalContent }: { toggleModalContent: React.Dispatch<React.SetStateAction<ACCOUNT_CONTROL_MODAL_PHASE>> }) {
    return (
        <div style={loginFormStyle}>
            <h1>Login</h1>
            Username: <input type={'text'} />
            Password: <input type={'password'} />
           
            <Link to='/client'><input type={'submit'} value='Enviar' /></Link> 
            <h3 onClick={() => toggleModalContent(ACCOUNT_CONTROL_MODAL_PHASE.RESET_PASSWORD)}>Reset Password</h3>
        </div>
    )
}