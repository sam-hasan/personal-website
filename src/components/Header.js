import React from 'react';

const Header = () => {
  return (
    <div className="w-9/12 mx-auto justify-center pt-6 pb-5 flex flex-row uppercase text-sm font-light antialiased">
      <div className="lg:mx-10 sm:mx-4 transform duration-200 hover-cyan">
        <a href="">Home</a>
      </div>
      <div className="lg:mx-10 sm:mx-4 transform duration-200 hover-cyan">
        <a href="">About</a>
      </div>
      <div className="lg:mx-10 sm:mx-4 transform duration-200 hover-cyan">
        <a href="">Work</a>
      </div>
      <div className="lg:mx-10 sm:mx-4 transform duration-200 hover-cyan">
        <a href="">Projects</a>
      </div>
      <div className="lg:mx-10 sm:mx-4 transform duration-200 hover-cyan">
        <a href="">CV</a>
      </div>
      <div className="lg:mx-10 sm:mx-4 transform duration-200 hover-cyan">
        <a href="">Contact</a>
      </div>
    </div>
  );
};

export default Header;
