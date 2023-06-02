import React, { useCallback, useEffect, useState } from 'react';
import { omdbApi } from '../../../../services/omdb';
import { ReviewDTO } from '../../../../models/review.dto';
import { MovieDetailsDTO } from '../../../../models/movie-details.dto';

function getCardStyle(imgUrl: string) {
    return {
        border: '2px solid red',
        margin: '2px',
        'background-image': `url("${imgUrl}")`,
    }
}

export default function LibraryCard(props: { review: ReviewDTO }) { //TODO: CHANGE THIS TO TYPED
    const [omdbFilm, setOmdbFilm] = useState<MovieDetailsDTO>();

    useEffect(() => {
        omdbApi.getById(props.review.movie_id)
          .then(response => {
            setOmdbFilm(response.data);
          })
      }, []);

    return (
        <div style={getCardStyle(omdbFilm?.Poster)}>
            <div>{omdbFilm?.Title}</div>
            <div>{`${omdbFilm?.Year} - ${props.review.score}`}</div>
            <div>{props.review.review_file_path ? <div /> : 'No reviews registered yet.'}</div>
            <button>Details</button>
        </div>
    );
}