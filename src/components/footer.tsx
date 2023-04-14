import React from "react";

const footerStyle = {
    backgroundColor: 'green',
}

export default function Footer(props: any) {
    return (
        <div style={footerStyle}>
            THIS IS A FOOTER <br />
            {props.children}
        </div>
    );
}