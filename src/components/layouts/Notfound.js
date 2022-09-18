import React from 'react';
// *router
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>sorry, page wasn't found:((</h1>
      <button onClick={() => nav('/')}>Home</button>
    </div>
  );
};

export default Notfound;
