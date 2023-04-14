import React from "react";

const libraryStyle = {
    backgroundColor: 'blue',
    margin: '2px',
}

export default function EmptyLibrary() {
    return (
        <h1 style={libraryStyle}>
            NO FILE HAS BEEN FOUND
        </h1>
    );
}