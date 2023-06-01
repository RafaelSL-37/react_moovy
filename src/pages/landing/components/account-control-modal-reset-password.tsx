import React from "react";
import { ACCOUNT_CONTROL_MODAL_PHASE } from "../landing.constants";

const resetPasswordFormStyle = {
    display: 'flex',
    'flex-direction': 'column',
    width: '300px',
}

export default function AccountControlModalResetPasswordForm({ toggleModalContent }: { toggleModalContent: React.Dispatch<React.SetStateAction<ACCOUNT_CONTROL_MODAL_PHASE>> }) {
    return (
        <div style={resetPasswordFormStyle}>
            <h1>Reset Password</h1>
            Old Password: <input type={'password'} />
            New Password: <input type={'password'} />
            Repeat New Password: <input type={'password'} />
            <input type={'submit'} value='Enviar' />
            <h3 onClick={() => toggleModalContent(ACCOUNT_CONTROL_MODAL_PHASE.LOGIN)}>Login</h3>
        </div>
    )
}