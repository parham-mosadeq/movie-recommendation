import axios from 'axios';

const BASE_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ebd37e7adfe3ff29431a051786835d1&page=1';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=4ebd37e7adfe3ff29431a051786835d1&query=`;

const getMovies = async () => {
  const resp = await axios(`${BASE_URL}`);
  return resp.data;
};

const searchMovies = async (name = null) => {
  const resp = await axios(`${SEARCH_API}${name}`);
  return resp.data;
};

export { searchMovies, getMovies };
