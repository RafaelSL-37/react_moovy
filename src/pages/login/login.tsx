import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./components/login-form";

//TODO: THIS WILL BE A MODAL ON LANDING PAGE
export default function Login() {//TODO:CENTER EVERYTHING, MARGINS AND BASIC CSS
    return (
        <div>            
            <LoginForm />

            <br /><br /><br /><br />
            <Link to="/client">Account Quick Access</Link><br />
            <Link to="/">Landing Page Quick Access</Link><br />
        </div>
    )
}