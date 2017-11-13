import axios from 'axios';

var APIkey = '51ce10e2d314a7fe78bf390de03163a2';

const HTTP = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    'api_key': APIkey,
  }
})

export const TMDB = {
  get: (movie) => HTTP.get('/movie/' + movie),
  search: (query) => HTTP.get('/search/movie/', {
    params: {
      query: query,
      page: 1,
    },
  })
}
