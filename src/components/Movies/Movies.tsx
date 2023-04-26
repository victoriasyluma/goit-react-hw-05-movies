import { searchMovieByKeyword } from '../../service/Api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import styles from './Movies.module.scss';

const QUERY = 'query';

export const Movies = () => {
  const [events, setEvent] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventsName = searchParams.get(QUERY);

  useEffect(() => {
    if (!eventsName) {
      return;
    }

    searchMovieByKeyword(eventsName).then(setEvent);
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
          {events.map(({ id, original_title }) => (
            <li key={id} className={styles.item}>
              <Link to={`${id}`} className={styles.link}>
                {original_title}
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
