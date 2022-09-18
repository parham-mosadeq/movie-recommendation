import axios from 'axios';

const base_url =
  'https://api.themoviedb.org/3/movie/550?api_key=4ebd37e7adfe3ff29431a051786835d1';

export const getMovies = async () => {
  const resp = await axios(`${base_url}`);
  return resp.data;
};
