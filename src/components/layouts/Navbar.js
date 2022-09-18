import React from 'react';
// *router
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
        <li>
          <Link to='/series'>series</Link>
        </li>
        <li>
          <Link to='/about-me'>about me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
