import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="xs:w-screen w-9/12 mx-auto justify-center pt-6 pb-5 flex flex-row uppercase text-sm font-light antialiased">
      <Link
        to="/"
        className="xs:mx-2 lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="xs:mx-2 lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        About
      </Link>
      <Link
        to="/bio"
        className="xs:mx-2 lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        Bio
      </Link>
      <Link
        to="/projects"
        className="xs:mx-2 lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        Projects
      </Link>
      <Link
        to="/cv"
        className="xs:mx-2 lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        CV
      </Link>
      <Link
        to="/contact"
        className="xs:mx-2 lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        Contact
      </Link>
    </div>
  );
};

export default Header;
