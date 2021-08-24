import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState(null);
  const [replyTo, setReplyTo] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const sendForm = {
    from_name: `${firstName} ${lastName}`,
    phone,
    reply_to: replyTo,
    message,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      sendForm,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((res) => {
        setSubmitMessage('Thanks for submitting!');
        setFirstName('');
        setLastName('');
        setReplyTo('');
        setMessage('');
        setPhone('');
      })
      .catch((err) => {
        setSubmitMessage('Message not sent. Please try again.');
      });
  };
  return (
    <div className="container mx-auto antialiased">
      <div className="max-w-2xl mx-auto my-10 xs:my-0">
        <div className="text-center">
          <h1 className="my-2 text-2xl text-gray-700 dark:text-gray-200">
            Leave a Message
          </h1>
          <p className="font-semibold italic">
            *abuse of this system will be reported
          </p>
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
                  name="from_name"
                  id="firstName"
                  placeholder="First name"
                  className="w-full px-3 py-3 placeholder-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  //   value={toSend.from_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6 w-6/12 ml-2">
                <label
                  for="lastName"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="lastName"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                  //   value={toSend.from_name.split[1]}
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
                  name="reply_to"
                  id="email"
                  placeholder="Email"
                  //   value={toSend.reply_to}
                  onChange={(e) => setReplyTo(e.target.value)}
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
                  name="phone"
                  id="Phone"
                  placeholder="Phone"
                  //   value={toSend.phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-3 placeholder-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
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
                rows="6"
                type="text"
                name="message"
                id="message"
                placeholder="Type your message here..."
                // value={toSend.message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-3 placeholder-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
              />
            </div>

            <div className="mb-2 flex">
              <button
                type="submit"
                className="block px-6 py-3 text-white cyan-background transform hover:scale-105 focus:scale-100 motion-reduce:transform-none duration-300 focus:outline-none"
              >
                Submit
              </button>
              <div className="ml-4 mt-3">
                {submitMessage === 'Thanks for submitting!' ? (
                  <p className="text-green-500">{submitMessage}</p>
                ) : (
                  <p className="text-red-600">{submitMessage}</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
