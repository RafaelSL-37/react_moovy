import React from "react";
import { ReviewDTO } from "../models/review.dto";
import LibraryCard from "./library-card";
import EmptyLibrary from "./library-empty";

const cardVector: ReviewDTO[] = [ //TODO: REMOVE MOCK DATA AND ADD REQUISITION
    {
        id: '1',
        created_at: new Date('22-03-03'),
        updated_at: new Date('22-03-03'),
        movie_id: undefined,
        user_id:  undefined,
        score: undefined,
    },
    {
        id: '2',
        created_at: new Date('22-03-03'),
        updated_at: new Date('22-03-03'),
        movie_id: undefined,
        user_id:  undefined,
        score: undefined,
    },
    {
        id: '3',
        created_at: new Date('22-03-03'),
        updated_at: new Date('22-03-03'),
        movie_id: undefined,
        user_id:  undefined,
        score: undefined,
    },
    {
        id: '4',
        created_at: new Date('22-03-03'),
        updated_at: new Date('22-03-03'),
        movie_id: undefined,
        user_id:  undefined,
        score: undefined,
    },
]

const libraryStyle = {
    border: '2px solid red',
    display: 'flex',
}

export default function Library() {
    return (
        <h1 style={libraryStyle}>
            <EmptyLibrary />
            {
                cardVector.map((card) => <LibraryCard review={card} />)
            }
        </h1>
    );
}