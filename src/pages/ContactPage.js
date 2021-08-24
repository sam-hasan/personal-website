import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="lg:w-9/12 lg:w-7/12 sm:px-4 mx-auto flex flex-col items-start pt-16 pb-16 antialiased">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
