import React from 'react';

const Pagination = ({ totalMovie, moviePerPage, nextPage }) => {
  const pageNumbers = [];

  if (totalMovie) {
    for (let i = 1; i <= Math.ceil(totalMovie.length / moviePerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((num) => (
          <li key={num}>
            <span onClick={() => nextPage(num)}>{num}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
