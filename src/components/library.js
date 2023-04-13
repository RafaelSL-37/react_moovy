import LibraryCard from "./library-card";
import EmptyLibrary from "./library-empty";

const cardVector = [
    'test',
    'test',
    'test',
    'test',
]

const libraryStyle = {
    backgroundColor: 'darkgrey',
    margin: '8px',
}

export default function Library() {
    return (
        <h1 style={libraryStyle}>
            <EmptyLibrary />
            {cardVector.map((card) => <LibraryCard />)}
        </h1>
    );
}