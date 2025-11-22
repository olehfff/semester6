import { useState } from 'react';
import { searchMovies } from '../../api/tmdbApi';
import { Link, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useState(() => {
    const q = searchParams.get('query') ?? '';
    if (q) {
      setQuery(q);
      handleSearch(q);
    }
  });

  async function handleSearch(q) {
    if (!q.trim()) return;
    try {
      const data = await searchMovies(q);
      setMovies(data.results || []);
      setSearchParams({ query: q });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Пошук фільмів</h1>
      <form onSubmit={e => { e.preventDefault(); handleSearch(query); }}>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button type="submit">Пошук</button>
      </form>

      <ul>
        {movies.map(m => (
          <li key={m.id}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}