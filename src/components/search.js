import SearchBox from "./search-box"

const searchStyle = {
    backgroundColor: 'darkgrey',
    margin: '8px',
}

export default function Account() {
    return (
        <div style={searchStyle}>
            <SearchBox />
            <h1>
                THIS IS THE SEARCH
            </h1>
        </div>
    )
}