const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

async function fetchFromTMDB(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.append('api_key', API_KEY);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) url.searchParams.append(k, v);
  });

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('TMDB fetch error');
  return res.json();
}

export const fetchTrending = () => fetchFromTMDB('/trending/movie/day');
export const searchMovies = (query, page = 1) =>
  fetchFromTMDB('/search/movie', { query, page, include_adult: false });
export const getMovieDetails = (movieId) =>
  fetchFromTMDB(`/movie/${movieId}`, { language: 'uk' });
export const getMovieCredits = (movieId) =>
  fetchFromTMDB(`/movie/${movieId}/credits`);
export const getMovieReviews = (movieId) =>
  fetchFromTMDB(`/movie/${movieId}/reviews`);