import React, { useState } from "react";
import { ACCOUNT_CONTROL_MODAL_PHASE } from "../landing.constants";
import AccountControlModalLoginForm from "./account-control-modal-login-form";
import AccountControlModalResetPasswordForm from "./account-control-modal-reset-password";
import '../styles/account-control-modal.style.css'

export default function AccountControlModal({ toggleModalVisibility }: { toggleModalVisibility: React.Dispatch<React.SetStateAction<boolean>>}) {//TODO:CENTER EVERYTHING, MARGINS AND BASIC CSS
    // TODO: TEST WHICH CASE IS BEING PASSED, EITHER LOGIN OR RECOVER PASSWORD

    const [ accountControlModalPhase, setAccountControlModalPhase ] = useState(ACCOUNT_CONTROL_MODAL_PHASE.LOGIN)

    return (
        <div className="modal">     
            {
                accountControlModalPhase === ACCOUNT_CONTROL_MODAL_PHASE.LOGIN 
                    ? <AccountControlModalLoginForm toggleModalContent={setAccountControlModalPhase} /> 
                    : <AccountControlModalResetPasswordForm toggleModalContent={setAccountControlModalPhase} />
            }
            <button onClick={() => toggleModalVisibility(false)} className='closeModalButton'>Close</button>
        </div>
    )
}