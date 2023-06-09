import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../service/Api';
import { Link } from 'react-router-dom';
import StyleSheet from './Home.module.scss';
import { TMovie } from '../../components/movies.types';

export const Home = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);

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
            <Link to={`movies/${movie.id}`} className={StyleSheet.link}>
              <span>{movie.title ? movie.title : movie.name}</span>

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`${movie.title} poster`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
