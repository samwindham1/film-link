import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieResponse } from 'moviedb-promise/dist/request-types';
import { getMovie } from '@api';

import { MovieInfo } from './MovieInfo';
import { MovieBackdrop } from './MovieBackdrop';

import './movie.css';

export const Movie = () => {
    const [movie, setMovie] = useState<MovieResponse>();
    const params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovie(movieId).then((info) => {
            console.log(info);
            setMovie(info);
        });
    }, [movieId]);

    return (
        <div className='movie'>
            {movie ? (
                <div className='movie__container'>
                    <MovieBackdrop backdropPath={movie.backdrop_path} />
                    <MovieInfo movie={movie} />
                </div>
            ) : (
                <div className='loading'>Loading...</div>
            )}
        </div>
    );
};
