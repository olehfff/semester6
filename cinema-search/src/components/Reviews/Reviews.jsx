import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/tmdbApi';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results || []));
  }, [movieId]);

  if (reviews.length === 0) return <p>Немає оглядів</p>;

  return (
    <ul>
      {reviews.map(r => (
        <li key={r.id}>
          <h4>{r.author}</h4>
          <p>{r.content}</p>
        </li>
      ))}
    </ul>
  );
}
