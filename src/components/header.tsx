import React from "react";
import Logo from "./logo";

const headerStyle = {
    backgroundColor: 'red',
}

function Header(props?: any) {
    return (
        <div style={headerStyle}>
            <Logo />
            {props.modal}
        </div>
    );
}

export default Header;