import React from 'react';
// *router
import { Link } from 'react-router-dom';
// *function
import { textCut } from '../../services/functions';

const HomePageMovie = ({
  id,
  backdrop_path,
  original_language,
  original_title,
  popularity,
  poster_path,
  title,
  vote_average,
  vote_count,
  overview,
  i,
}) => {
  return (
    <div>
      <Link to={`/movie-details/${id}`}>
        <img
          width={50}
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
          alt={title}
        />
      </Link>
      <h4>title:{title}</h4>
      <div>
        {textCut(overview)}{' '}
        <Link to={`/movie-details/${id}`}>read more...</Link>
      </div>
    </div>
  );
};

export default HomePageMovie;
