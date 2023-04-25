import axios from 'axios';

const KEY = '46f3b9dca981eed2c173014155e3a7a9';
export const getTrendingMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
};

export const getMovieDetailsById = (id) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
    .then((response) => response.data);
};

export const getCastById = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`
  );
};

export const getReviewsById = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`
  );
};

export const searchMovieByKeyword = (keyword) => {
  return axios.get(`
https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${KEY}`);
};
