import React from "react";

const libraryStyle = {
    backgroundColor: 'blue',
    border: '2px solid red',
    margin: '2px',
}

export default function EmptyLibrary() {
    return (
        <h1 style={libraryStyle}>
            NO FILE HAS BEEN FOUND
        </h1>
    );
}