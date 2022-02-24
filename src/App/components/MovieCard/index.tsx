import { getMoviePosterUrl } from '@api';
import { MovieResult } from 'moviedb-promise/dist/request-types';
import './MovieCard.css';

export interface MovieCardProps {
    movie: MovieResult;
}

const onClick = (movie: MovieResult) => {
    console.log(`OnClick: ${movie.title}`);
};

export const MovieCard = ({ movie }: MovieCardProps) => (
    <div className='movie-card'>
        {movie.poster_path && <img src={getMoviePosterUrl(movie.poster_path)} className='movie-card__poster' />}
        <div className='movie-card__title'>{movie.title}</div>
    </div>
);
