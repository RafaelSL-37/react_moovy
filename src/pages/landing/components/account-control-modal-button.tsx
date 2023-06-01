import React from "react";
import '../styles/account-control-modal.style.css'

export default function AccountControlModalButton({ toggleModalVisibility }: { toggleModalVisibility: React.Dispatch<React.SetStateAction<boolean>>}) {//TODO:CENTER EVERYTHING, MARGINS AND BASIC CSS
    return (
        <div className="openModalButton">     
            <button onClick={() => toggleModalVisibility(true)}>Login v</button>
        </div>
    )
}