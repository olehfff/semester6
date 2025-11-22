import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/tmdbApi';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(err => setError(err.message));
  }, [movieId]);

  if (error) return <p>Помилка: {error}</p>;
  if (!movie) return <p>Завантаження...</p>;

  return (
    <div>
      <button onClick={() => window.history.back()}>← Назад</button>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <nav>
        <Link to="cast" state={{ from: location.state?.from }}>Актори</Link> |{' '}
        <Link to="reviews" state={{ from: location.state?.from }}>Огляди</Link>
      </nav>

      {}
      <Outlet />
    </div>
  );
}