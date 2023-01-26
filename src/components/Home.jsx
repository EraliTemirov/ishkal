import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className='text-center'>Home page</h1>

      <Link to="/about">About page ga o'tish</Link>
    </div>
  );
}

export default Home;
 