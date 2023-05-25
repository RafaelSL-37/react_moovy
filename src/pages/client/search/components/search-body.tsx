import React from "react"
import SearchBox from "./search-box"

const searchStyle = {
    border: '2px solid red',
}

export default function SearchBody() {
    return (
        <div style={searchStyle}>
            <SearchBox />
            <h1>
                THIS IS THE SEARCH
            </h1>
        </div>
    )
}