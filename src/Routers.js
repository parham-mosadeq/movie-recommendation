import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
// *components
import HomePageMovieDetails from './components/layouts/HomePageMovieDetails';
import HomePage from './components/layouts/HomePage';
import Notfound from './components/layouts/Notfound';
import AboutMe from './components/layouts/AboutMe';
import Movies from './components/movies/Movies';
import Series from './components/series/Series';
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movie-details/:id' element={<HomePageMovieDetails />} />
      <Route path='/series' element={<Series />} />
      <Route path='/About-me' element={<AboutMe />} />
      <Route path='/notfound' element={<Notfound />} />
      <Route path='/*' element={<Navigate to='/notfound' />} />
    </Routes>
  );
};

export default Routers;
