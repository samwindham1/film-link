import axios from 'axios';

const HTTP = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: process.env.TMDB_API_KEY
    }
});

export const TMDB = {
    get: (movie) => HTTP.get('/movie/' + movie),
    search: (query) =>
        HTTP('/search/movie', {
            params: {
                query: query,
                page: 1,
                include_adult: false,
                language: 'en-US'
            }
        }),
    config: () => HTTP.get('/configuration')
};
