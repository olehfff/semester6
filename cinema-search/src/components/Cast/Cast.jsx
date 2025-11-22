import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/tmdbApi';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast || []));
  }, [movieId]);

  if (cast.length === 0) return <p>Немає інформації про акторів</p>;

  return (
    <ul>
      {cast.map(person => (
        <li key={person.cast_id || person.credit_id}>
          {person.name} — {person.character}
        </li>
      ))}
    </ul>
  );
}