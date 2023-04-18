import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            Login Page <br /><br />
            Login <br />
            Password <br /><br />

            <Link to="/my-account">Account Quick Access</Link><br />
            <Link to="/">Landing Page Quick Access</Link><br />
        </div>
    )
}