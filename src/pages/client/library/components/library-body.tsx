import React, { useState } from "react";
import { ReviewDTO } from "../../../../models/review.dto";
import { ReviewService } from "../../../../services/reviews";
import LibraryCard from "./library-card";
import EmptyLibrary from "./library-empty";

const reviewsMockData: ReviewDTO[] = [ //TODO: REMOVE MOCK DATA AND ADD REQUISITION
    {
        id: '1',
        created_at: new Date('22-03-03'),
        updated_at: new Date('22-03-03'),
        movie_id: 'undefined',
        user_id:  'undefined',
        score: 5,
    },
    {
        id: '2',
        created_at: new Date('22-03-03'),
        updated_at: new Date('22-03-03'),
        movie_id: 'undefined',
        user_id:  'undefined',
        score: 5,
    },
    {
        id: '3',
        created_at: new Date('22-03-03'),
        updated_at: new Date('22-03-03'),
        movie_id: 'undefined',
        user_id:  'undefined',
        score: 5,
    },
    {
        id: '4',
        created_at: new Date('22-03-03'),
        updated_at: new Date('22-03-03'),
        movie_id: 'undefined',
        user_id:  'undefined',
        score: 5,
    },
]

const libraryStyle = {
    border: '2px solid red',
    display: 'flex',
}

export default function LibraryBody() {
    const [reviews, setReviews] = useState(reviewsMockData);

    // setReviews(await ReviewService.getReviewsByUserId(''))

    return (
        <h1 style={libraryStyle}>
            {
                reviews.length > 0 
                    ? reviews.map((review) => <LibraryCard review={review} />) 
                    : <EmptyLibrary />
            }
        </h1>
    );
}