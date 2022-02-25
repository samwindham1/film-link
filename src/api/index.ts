import { MovieDb } from 'moviedb-promise';

const movieDb = new MovieDb(process.env.TMDB_API_KEY);

export const getMovie = async (id: string) => {
    return await movieDb.movieInfo({ id });
};

export const searchMovie = async (name: string) => {
    return await movieDb.searchMovie({ query: name });
};

const movieDbImageUrl = 'https://image.tmdb.org/t/p/original/';

const concatMovieDbUrl = (path: string) => {
    return movieDbImageUrl + path;
};

export const getMoviePosterUrl = (path: string) => concatMovieDbUrl(path);
export const getMovieBackdropUrl = (path: string) => concatMovieDbUrl(path);
