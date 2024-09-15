"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Add form submission logic here (e.g., API call)
    console.log({
      name,
      email,
      message,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-lg rounded-md w-full max-w-lg"
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
              rows={5}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center bg-white p-8 shadow-lg rounded-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Thank you for contacting us!</h2>
          <p className="text-gray-700">
            We have received your message and will get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
