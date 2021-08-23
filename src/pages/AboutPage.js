import React from 'react';

const AboutPage = () => {
  return (
    <div className="lg:w-6/12 sm:px-10 md:px-10 md:w-screen mx-auto flex flex-col items-start pt-16 pb-16 antialiased">
      <div>
        <h1 className="text-2xl pb-4 font-normal text-gray-800">About Me</h1>
      </div>
      <div className="text-gray-800 leading-loose body-text font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
        amet sem consectetur, mollis ipsum nec, pellentesque eros. Maecenas eu
        dui turpis. Aliquam sit amet sagittis odio. Nulla vulputate urna mi, ac
        ultricies magna interdum eu. Curabitur dapibus luctus dolor, ac
        scelerisque lectus congue non. Nullam in sapien ut orci rutrum
        dignissim. <br />
        <br />
        In lobortis et enim in auctor. Nulla facilisi. Nunc metus erat,
        consectetur nec placerat nec, porttitor quis nunc. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Pellentesque mattis semper aliquam.
        Vivamus elit justo, interdum a faucibus eu, fringilla at justo. Nam a
        molestie urna. Fusce non quam tellus. Pellentesque eget mi nunc. Mauris
        in condimentum orci. Etiam ac odio vel nulla vulputate mollis ut nec
        mauris. Etiam euismod dui augue, at auctor dolor venenatis vel.
      </div>
      <div>
        <h1 className="text-2xl pb-4 pt-16 font-normal text-gray-800">
          Skills
        </h1>
      </div>
      <h3 className="text-gray-600">Programming</h3>
      <div className="flex justify-center mt-4 space-x-6">
        <i class="fab fa-java font-awesome"></i>
        <i class="fab fa-js font-awesome"></i>
        <i class="fab fa-python font-awesome"></i>
        <i class="fab fa-html5 font-awesome"></i>
        <i class="fab fa-css3-alt font-awesome"></i>
        {/* <ion-icon name="logo-python"></ion-icon>
        <ion-icon name="logo-html5"></ion-icon>
        <ion-icon name="logo-html5"></ion-icon> */}
      </div>
      <h3 className="pt-6 text-gray-600">Technologies</h3>
      <div className="flex justify-center mt-4 space-x-6">
        <i class="fab fa-node font-awesome"></i>
        <i class="fab fa-react font-awesome"></i>
        <i class="fab fa-aws font-awesome"></i>
        <i class="icon-mongodb mfizz-icons"></i>
        <span
          class="iconify font-awesome"
          data-icon="simple-icons:redux"
        ></span>
        <i class="fab fa-git-alt font-awesome"></i>
        <i class="fab fa-sass font-awesome"></i>
      </div>
    </div>
  );
};

export default AboutPage;
