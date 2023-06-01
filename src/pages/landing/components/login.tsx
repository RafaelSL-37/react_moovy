import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./login-form";

export default function Login({ toggleFunction }: {toggleFunction: React.Dispatch<React.SetStateAction<boolean>>}) {//TODO:CENTER EVERYTHING, MARGINS AND BASIC CSS
    return (
        <div >     
            <button onClick={() => toggleFunction(false)}>Close</button>
            <LoginForm />

            <br /><br /><br /><br />
            <Link to="/client">Account Quick Access</Link><br />
        </div>
    )
}