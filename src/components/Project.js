import React from 'react';

const Project = ({ name, description, image, url }) => {
  const marginRight = name === 'SamNotes' ? 'mr-16' : 'mr-0';
  return (
    <div>
      <a href={url}>
        <div
          className={`max-w-xs bg-white shadow-xl overflow-hidden antialiased ${marginRight} mb-10`}
        >
          <div className="px-4 py-2">
            <h1 className="text-gray-800 text-2xl pt-3">{name}</h1>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
          <img
            className="h-56 w-full object-cover mt-2"
            src={image}
            alt={name}
          />
        </div>
      </a>
    </div>
  );
};

export default Project;
