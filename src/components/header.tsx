import React from "react";
import Logo from "./logo";

const headerStyle = {
    backgroundColor: 'red',
}

function Header() {
    return (
        <div style={headerStyle}>
            <Logo />
        </div>
    );
}

export default Header;