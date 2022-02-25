import { useState } from 'react';
import classNames from 'classnames';
import { getMoviePosterUrl } from '@api';
import { MovieResponse } from 'moviedb-promise/dist/request-types';

import './MovieInfo.css';

export const MovieInfo = ({ movie }: { movie: MovieResponse }) => {
    const [posterLoading, setPosterLoading] = useState(true);

    return (
        <div className='movie__info'>
            {movie.poster_path && (
                <img
                    src={getMoviePosterUrl(movie.poster_path)}
                    className={classNames('movie__poster', { loading: posterLoading })}
                    onLoad={() => setPosterLoading(false)}
                />
            )}
            <div className='movie__details'>
                <h1 className='movie__details__title'>
                    {movie.title}
                    <span className='movie__details__title__year'>
                        {` (${new Date(movie.release_date).getFullYear()})`}
                    </span>
                </h1>
                <p className='movie__details__tagline'>{movie.tagline}</p>
                <h3>Overview</h3>
                <p className='movie__details__description'>{movie.overview}</p>
            </div>
        </div>
    );
};
