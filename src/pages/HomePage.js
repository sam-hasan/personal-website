import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto flex flex-col items-center">
        <div className="uppercase pt-5 text-3xl font-normal antialiased">
          <h1>Syed Sameer Hasan, CS Student</h1>
        </div>
      </div>
      <div className="w-10/12 mx-auto py-10">
        <img src="/images/hero.jpeg" alt="hero"></img>
      </div>
    </div>
  );
};

export default HomePage;
