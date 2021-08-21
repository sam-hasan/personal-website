import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto flex flex-col items-center">
        <div className="uppercase pt-16 text-3xl font-normal antialiased text-gray-800">
          <h1>Syed Sameer Hasan, CS Student</h1>
        </div>
      </div>
      <div className="w-10/12 mx-auto pt-6 pb-12">
        <img src="/images/hero.jpeg" alt="hero"></img>
      </div>
    </div>
  );
};

export default HomePage;
