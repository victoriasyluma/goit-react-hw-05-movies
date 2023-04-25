import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../service/Api';
import { Link } from 'react-router-dom';
import StyleSheet from './Home.module.scss';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then((response) => response.data.results)
      .then(setMovies);
  }, []);

  return (
    <div>
      <h1 className={StyleSheet.title}>Trending Movies</h1>
      <ul className={StyleSheet.list_movies}>
        {movies.map((movie) => (
          <li key={movie.id} className={StyleSheet.list_item}>
            <Link to={`movies/${movie.id}`}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
