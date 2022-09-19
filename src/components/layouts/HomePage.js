import React, { useContext, useState } from 'react';

// *context
import { MovieContext } from '../../contexts/MovieContextProvider';
// *components
import Pagination from './Pagination';
import HomePageMovie from './HomePageMovie';

const HomePage = () => {
  const movies = useContext(MovieContext);
  const { results } = movies;
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage, setMoviePerPage] = useState(10);

  const lastIndexOfMovie = currentPage * moviePerPage;
  const firstIndexOfMovie = lastIndexOfMovie - moviePerPage;

  const currentMovies =
    results && results.slice(firstIndexOfMovie, lastIndexOfMovie);

  const nextPage = (num) => {
    setCurrentPage(num);
  };

  return (
    <div>
      <h1>Homepage</h1>

      {results
        ? currentMovies.map((movie) => {
            const { id } = movie;
            return <HomePageMovie key={id} i={movie} {...movie} />;
          })
        : null}

      <Pagination
        totalMovie={results}
        moviePerPage={moviePerPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default HomePage;
