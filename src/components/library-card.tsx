import React from 'react';

const libraryStyle = {
    backgroundColor: 'green',
    fontColor: 'black',
    margin: '2px',
}

export default function LibraryCard(props: any) {
    return (
        <h1 style={libraryStyle}>
            {props.review.id}
        </h1>
    );
}