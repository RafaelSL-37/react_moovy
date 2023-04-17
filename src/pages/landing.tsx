import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div>
            LANDING PAGE <br /><br />
            <Link to="/login">
                To Login
            </Link>
        </div>
    )
}