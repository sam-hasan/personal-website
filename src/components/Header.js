import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-9/12 mx-auto justify-center pt-6 pb-5 flex flex-row uppercase text-sm font-light antialiased">
      <Link
        to="/"
        className="lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        About
      </Link>
      <Link
        to="/work-experience"
        className="lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        Work Experience
      </Link>
      <Link
        to="/projects"
        className="lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        Projects
      </Link>
      <Link
        to="/cv"
        className="lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        CV
      </Link>
      <Link
        to="/contact"
        className="lg:mx-9 sm:mx-4 transform duration-200 hover-cyan"
      >
        Contact
      </Link>
    </div>
  );
};

export default Header;
