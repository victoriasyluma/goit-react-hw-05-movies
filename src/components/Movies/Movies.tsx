import { searchMovieByKeyword } from '../../service/Api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import styles from './Movies.module.scss';
import { TMovie } from '../movies.types';

const QUERY = 'query';

export const Movies = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventsName = searchParams.get(QUERY);

  useEffect(() => {
    if (!eventsName) {
      return;
    }

    searchMovieByKeyword(eventsName).then(setMovies);
  }, [eventsName]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    setSearchParams({ [QUERY]: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name={QUERY} className={styles.input} />
          <button type="submit">Search</button>
        </form>

        <ul className={styles.list}>
          {movies.map(({ id, original_title, backdrop_path }) => (
            <li key={id} className={styles.item}>
              <Link to={`${id}`} className={styles.link}>
                <span>{original_title}</span>
                <img
                  src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                  alt={`${original_title} poster`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default Movies;
