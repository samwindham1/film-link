import { MovieDb } from 'moviedb-promise';

const movieDb = new MovieDb(process.env.TMDB_API_KEY);

export const searchMovie = async (name: string) => {
    return await movieDb.searchMovie({ query: name });
};

const moveiDbImageUrl = 'https://image.tmdb.org/t/p/original/';

export const getMoviePosterUrl = (path: string) => {
    return moveiDbImageUrl + path;
};
