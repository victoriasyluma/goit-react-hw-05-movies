import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovieDetailsById } from '../../service/Api';
import styles from './MovieDetails.module.scss';

export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetailsById(movieId).then(setMovies);
  }, [movieId]);

  return (
    movies && (
      <>
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go back
        </button>
        <div className={styles.main_container}>
          {movies.poster_path ? (
            <div className={styles.container_img}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                alt={`${movies.title} poster`}
              />
            </div>
          ) : (
            <p>No poster image available</p>
          )}

          <div className={styles.container_info}>
            {' '}
            <h1>
              {movies.title}({movies.release_date.slice(0, 4)})
            </h1>
            <h2>Overview</h2>
            <p>{movies.overview}</p>
            <h3>
              Users score: <span>{movies.vote_average}</span>
            </h3>
            <h3>Genres:</h3>
            <p> {movies.genres.map((genre) => genre.name).join(', ')}</p>
          </div>
        </div>
        <h4 className={styles.title}> Additional information </h4>
        <div className={styles.container_links}>
          {' '}
          <Link to="cast" state={location.state} className={styles.cast}>
            Actors
          </Link>
          <br />
          <Link to="reviews" state={location.state} className={styles.cast}>
            Reviews
          </Link>
        </div>

        <Outlet />
      </>
    )
  );
};
