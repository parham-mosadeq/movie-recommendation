import React from 'react';

const Pagination = ({ totalMovie, moviePerPage, nextPage }) => {
  const pageNumbers = [];

  if (totalMovie) {
    for (let i = 1; i <= Math.ceil(totalMovie.length / moviePerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav className='bg-gray-300 w-full  '>
      <ul className='flex justify-around mt-2'>
        {pageNumbers.map((num) => (
          <li key={num}>
            <span
              className='hover:cursor-pointer'
              onClick={() => nextPage(num)}
            >
              {num}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
