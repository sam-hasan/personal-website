import React from 'react';
import Project from '../components/Project';

const ProjectsPage = () => {
  return (
    <div className="xs:w-screen lg:w-7/12 sm:px-4 mx-auto flex flex-col items-center justify-center pt-16 pb-16 antialiased">
      <div className="flex lg:flex-row sm:flex-col self-center justify-center flex-wrap">
        <Project
          image="./images/samnotes.png"
          name="SamNotes"
          url="https://samnotes-app.herokuapp.com/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
        />
        <Project
          image="./images/samhasan.png"
          name="Personal Website"
          url="https://samhasan.netlify.app/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
        />
        <Project
          image="./images/samsrecipes.png"
          name="Sam's Recipes"
          url="https://samsrecipes.netlify.app/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
