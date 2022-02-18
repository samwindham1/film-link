import axios from 'axios';

const APIkey = '51ce10e2d314a7fe78bf390de03163a2';

const HTTP = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: APIkey
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
