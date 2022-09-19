import React, { useState } from 'react';

// *function
import { textCut, numberModifier } from '../../services/functions';

const HomePageMovie = ({
  original_language,
  popularity,
  poster_path,
  title,
  vote_average,
  vote_count,
  overview,
  i,
}) => {
  const [showOverview, setShowOverview] = useState(false);
  return (
    <div
      className=' p-2 shadow-xl m-3 rounded-md bg-teal-800 text-white
      overflow-x-hidden
    '
    >
      <img
        className='h-96 w-full object-contain mt-2 mb-2 '
        src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
        alt={title}
      />
      <h4 className='font-bold tracking-wider capitalize  '>
        title:
        <span className='font-light '>{title}</span>
      </h4>
      <div>
        <div className='shadow-xl p-3 m-2 rounded-lg'>
          {!showOverview && <>{textCut(overview)}</>}
          {showOverview && <div>{overview}</div>}
          <span
            className='hover:cursor-pointer hover:text-sky-600 text-sky-500'
            onClick={() => setShowOverview(!showOverview)}
          >
            {' '}
            {showOverview ? 'show less' : 'show more...'}
          </span>
        </div>

        <span className='capitalize'>votes:{numberModifier(vote_count)}</span>
        <p className='capitalize'>
          ratings:#
          <span
            className={vote_average >= 7 ? 'text-green-500' : 'text-yellow-600'}
          >
            {vote_average}
          </span>
        </p>
      </div>
      <div>
        <p className='capitalize'>language:#{original_language}</p>
        <p className='capitalize'>
          popularity:
          <span>{popularity}</span>
        </p>
      </div>
    </div>
  );
};

export default HomePageMovie;
