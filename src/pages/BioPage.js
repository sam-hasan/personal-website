import React from 'react';

const WorkExperiencePage = () => {
  return (
    <div className="xs:w-screen xs:px-3 lg:w-10/12 xl:w-7/12 md:w-screen sm:px-10 mx-auto flex flex-col items-start pt-16 pb-16 antialiased">
      {/* Work Experience */}
      <div className="w-full flex flex-row justify-between border-solid	border-b-2 cyan-border">
        <div className="3/12 text-2xl xs:text-xl">
          Work <br /> Experience
        </div>
        <div className="w-9/12 flex flex-col">
          {/* Work Experience 1 */}
          <div className="mb-8">
            <div className="text-2xl mb-4 flex justify-between">
              <div className="text-2xl xs:text-xl">Some Company</div>
              <div className="font-light text-lg xs:text-base">
                Someplace, SW
              </div>
            </div>
            <p className="mb-6 text-gray-600">
              Some Job &nbsp; • &nbsp; January 2021 - Present
            </p>
            <p className="text-black leading-loose body-text font-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu
              pede mollis pretium.
            </p>
          </div>
          {/* Work Experience 2 */}
          <div className="mb-10">
            <div className="text-2xl xs:text-xl mb-4 flex justify-between">
              <div className="text-2xl xs:text-xl">Dalhousie University </div>
              <div className="font-light text-lg xs:text-base">Halifax, NS</div>
            </div>
            <p className="mb-6 text-gray-600">
              Teaching Assistant for CSCI1170 &nbsp; • &nbsp; September 2021 -
              December 2021
            </p>
            <p className="text-black leading-loose body-text font-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu
              pede mollis pretium.
            </p>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="w-full flex flex-row justify-between pt-10 border-solid	border-b-2 cyan-border">
        <div className="3/12 text-2xl xs:text-xl">Education</div>
        <div className="w-9/12 flex flex-col">
          {/* School 1 */}
          <div className="mb-10">
            <div className="text-2xl mb-4 flex justify-between">
              <div className="text-2xl xs:text-xl">Dalhousie University </div>
              <div className="font-light text-lg xs:text-base">Halifax, NS</div>
            </div>
            <p className="mb-6 text-gray-600">GPA: 4.3</p>
            <p className="text-black leading-loose body-text font-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu
              pede mollis pretium.
            </p>
          </div>
        </div>
      </div>
      {/* Volunteering */}
      <div className="w-full flex flex-row justify-between pt-10">
        <div className="3/12 text-2xl xs:text-xl xs:mr-2">Volunteering</div>
        <div className="w-9/12 flex flex-col">
          {/* Volunteering 1 */}
          <div className="mb-10">
            <div className="text-2xl mb-4 flex justify-between">
              <div className="text-2xl xs:text-xl">Dalhousie University</div>
              <div className="font-light text-lg xs:text-base">Halifax, NS</div>
            </div>
            <p className="mb-6 text-gray-600">
              Course Representative for CSCI1170 &nbsp; • &nbsp; January 2021 -
              April 2021
            </p>
            <p className="text-black leading-loose body-text font-light">
              A Course Representative is a point of contact to facilitate and
              provide timely communication and feedback to instructors and to
              the Faculty of Computer Science. The specific feedback is directed
              from students through the representative to the professor. This
              position is dedicated to resolving conflicts and inquiries quickly
              and effectively. Additionally, Course Representatives assist their
              peers in navigating to the most appropriate supports and resources
              on campus.
            </p>
          </div>
          {/* Volunteering 2 */}
          <div className="mb-10">
            <div className="text-2xl mb-4 flex justify-between">
              <div className="text-2xl xs:text-xl">
                The Rotoract Club of Halifax
              </div>
              <div className="font-light text-lg xs:text-base">Halifax, NS</div>
            </div>
            <p className="mb-6 text-gray-600">
              Member &nbsp; • &nbsp; September 2020 - Present
            </p>
            <p className="text-black leading-loose body-text font-light">
              As a member of the Rotoract Club I was always involved in projects
              to bring changes in my community. Through planning and organizing
              fundraising events I supported the local community groups as well
              as international projects. I was also lucky to be involved with
              circumstances that were happening in my city, and tried to be
              responsive in any way I could. In doing so, I was able to develop
              my leadership skills, further my sense of worldly knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
