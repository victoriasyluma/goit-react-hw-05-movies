import { useState, useEffect } from 'react';
import { getReviewsById } from '../../service/Api';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.scss';
import { TReview } from '../movies.types';

export const Reviews = () => {
  const [review, setReview] = useState<TReview[]>([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsById(movieId).then(setReview);
  }, [movieId]);

  return (
    <ul className={styles.list_reviews}>
      {review.length === 0 ? (
        <li>
          <p>We don't have any review for this movie</p>
        </li>
      ) : (
        review.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <span>Author:</span> {author}
            </p>
            <p>{content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
