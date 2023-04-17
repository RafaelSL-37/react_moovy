import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>
                Not all those who wander are lost. <br />
                That's not your case.
            </h1>
            <p>
                <Link to="/">Return to home page</Link>
            </p>
        </div>
    );
}