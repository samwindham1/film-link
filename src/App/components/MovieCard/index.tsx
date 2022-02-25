import { getMoviePosterUrl } from '@api';
import { MovieResult } from 'moviedb-promise/dist/request-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

export interface MovieCardProps {
    movie: MovieResult;
}

export const MovieCard = ({ movie }: MovieCardProps) => (
    <Link to={`/movie/${movie.id}`} className='movie-card'>
        {movie.poster_path && <img src={getMoviePosterUrl(movie.poster_path)} className='movie-card__poster' />}
        <div className='movie-card__title'>{movie.title}</div>
    </Link>
);
