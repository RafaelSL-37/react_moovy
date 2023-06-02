import React from "react";
import Logo from "./logo";

const headerStyle = {
    backgroundColor: 'red',
    display: 'flex',
    'flex-direction': 'row',
}

// IHeaderProps: {
//     element: JSX.Element,
// }

function Header(props?: any) {
    return (
        <div style={headerStyle}>
            <Logo />
            {props.element}
        </div>
    );
}

export default Header;