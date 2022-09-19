import React, { createContext, useState, useEffect } from 'react';
// *api
import { getMovies, searchMovies } from '../services/api';

export const MovieContext = createContext();
export const SearchContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);

  // getting movies
  useEffect(() => {
    const fetchData = async () => {
      setMovies(await getMovies());
    };

    fetchData();

    return () => {
      setMovies([]);
    };
  }, []);

  // searching movies

  useEffect(() => {
    const fetchData = async () => {
      setSearchMovie(await searchMovies());
    };

    fetchData();

    return () => {
      setSearchMovie([]);
    };
  }, []);

  return (
    <div>
      <MovieContext.Provider value={movies}>
        <SearchContext.Provider value={searchMovie}>
          {children}
        </SearchContext.Provider>
      </MovieContext.Provider>
    </div>
  );
};

export { MovieContextProvider };
