// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
      <Link to='/random' key="1" className="home-link">
        <div >
          Home
        </div>
      </Link>
      <Link to='/bookmarks' key="2" className="bookmark-link">
        <div>
          Bookmark
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
