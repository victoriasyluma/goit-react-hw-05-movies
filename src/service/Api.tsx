import axios from 'axios';

const KEY = '46f3b9dca981eed2c173014155e3a7a9';
const BASE = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = () => {
  return axios.get(`${BASE}trending/all/day?api_key=${KEY}`);
};

export const getMovieDetailsById = (id) => {
  return axios
    .get(`${BASE}movie/${id}?api_key=${KEY}`)
    .then((response) => response.data);
};

export const getCastById = (id) => {
  return axios
    .get(`${BASE}movie/${id}/credits?api_key=${KEY}`)
    .then((response) => response.data.cast);
};

export const getReviewsById = (id) => {
  return axios
    .get(`${BASE}movie/${id}/reviews?api_key=${KEY}`)
    .then((response) => response.data.results);
};

export const searchMovieByKeyword = (keyword) => {
  return axios
    .get(`${BASE}search/movie?query=${keyword}&api_key=${KEY}`)
    .then((response) => response.data.results);
};
