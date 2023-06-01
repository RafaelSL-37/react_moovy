import React from "react"

const style = {
    height: '80px',
    width: '120px',
    'margin': '2px',
}

const containerStyle = {
    display: 'flex',
    'flex-direction': 'rows',
}

export default function Logo() {
    return (
        <div style={containerStyle}>
            <img style={style} src='https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214419.jpg' alt='logo' />
            THIS IS A HEADER
        </div>
    )
}