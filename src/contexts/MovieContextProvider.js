import React, { createContext, useState, useEffect } from 'react';
// *api
import { getMovies } from '../services/api';

const MovieContext = createContext();
const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setMovies(await getMovies());
    };

    fetchData();

    return () => {
      setMovies([]);
    };
  }, []);
  return (
    <div>
      <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
    </div>
  );
};

export { MovieContextProvider };
