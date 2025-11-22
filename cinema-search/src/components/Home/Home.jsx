import { useEffect, useState } from 'react';
import { fetchTrending } from '../../api/tmdbApi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrending()
      .then(data => setMovies(data.results || []))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Помилка: {error}</p>;
  return (
    <div className={styles.container}>
      <h1>Популярні фільми</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {};
