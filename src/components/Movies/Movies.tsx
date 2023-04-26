import { searchMovieByKeyword } from '../../service/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    searchMovieByKeyword(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      <input></input>
    </div>
  );
};
