import React from 'react';

const libraryStyle = {
    border: '2px solid red',
    margin: '2px',
}

export default function LibraryCard(props: any) { //TODO: CHANGE THIS TO TYPED
    return (
        <h1 style={libraryStyle}>
            {props.review.id}
        </h1>
    );
}