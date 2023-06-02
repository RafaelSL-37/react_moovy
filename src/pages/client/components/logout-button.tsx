import React from "react";
import { Link } from "react-router-dom";

export function LogoutButton() {
    return (
        <Link to='/'>
            <button>Logout</button>
        </Link>
    )
}