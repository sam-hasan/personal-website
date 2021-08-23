import React from 'react';

const ContactForm = () => {
  const submitHandler = () => {
    console.log('message received');
  };
  return (
    <div className="container mx-auto antialiased">
      <div className="max-w-2xl mx-auto my-10">
        <div className="text-center">
          <h1 className="my-2 text-2xl text-gray-700 dark:text-gray-200">
            Leave a Message
          </h1>
        </div>

        <div className="m-7">
          <form onSubmit={submitHandler}>
            <div className="flex justify-between">
              <div className="mb-6 w-6/12 mr-2">
                <label
                  for="firstName"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First name"
                  className="w-full px-3 py-3 placeholder-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>
              <div className="mb-6 w-6/12 ml-2">
                <label
                  for="Phone"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="Phone"
                  id="Phone"
                  placeholder="Last name"
                  className="w-full px-3 py-3 placeholder-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mb-6 w-6/12 mr-2">
                <label
                  for="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-3 py-3 placeholder-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>

              <div className="mb-6 w-6/12 ml-2">
                <label
                  for="Phone"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="Phone"
                  id="Phone"
                  placeholder="Phone"
                  className="w-full px-3 py-3 placeholder-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>
            </div>

            <div className="mb-2">
              <div className="flex justify-between mb-2">
                <label
                  for="message"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Message
                </label>
              </div>
              <textarea
                rows="8"
                type="text"
                name="message"
                id="message"
                placeholder="Type your message here..."
                className="w-full px-3 py-3 placeholder-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
              />
            </div>

            <div className="mb-2">
              <button
                type="submit"
                className=" px-6 py-3 text-white cyan-background transform hover:scale-105 focus:scale-100 motion-reduce:transform-none duration-300 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
