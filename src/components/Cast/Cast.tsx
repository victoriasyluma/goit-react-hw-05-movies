import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../service/Api';
import styles from './Cast.module.scss';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastById(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.actors}>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <li key={id} className={styles.item}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={original_name}
            />
          ) : (
            <p>No photo available</p>
          )}

          <p>{original_name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};
