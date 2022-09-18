import React from 'react';
import Navbar from './components/layouts/Navbar';
// *components

// *router
import Routers from './Routers';
// !
// todo read the documentation and figure out how to work with it
// todo create filters
// todo install and initialize tailwind
// todo add font to project
// todo maybe dark theme
// *context
import { MovieContextProvider } from './contexts/MovieContextProvider';
const App = () => {
  return (
    <div>
      <Navbar />
      <MovieContextProvider>
        <Routers />
      </MovieContextProvider>
    </div>
  );
};

export default App;
