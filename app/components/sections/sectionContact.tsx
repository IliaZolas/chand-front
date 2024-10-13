"use client";

import React, { useState } from 'react';

interface ContactFormProps {
backgroundColor?: string;
backgroundFormColor?: string;
text?: string;
}

const SectionContact: React.FC<ContactFormProps> = ({
    backgroundColor = '#222020', // Default background color
    backgroundFormColor = '#201f1f', // Default background color
    text = 'Contact Us',          // Default heading text
    }) => {
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
    <div
        className="flex flex-col items-center justify-center min-h-screen py-20 px-6"
        style={{ backgroundColor: backgroundColor }}
    >
        <h1 className="text-4xl font-bold mb-8 text-white">{text}</h1>
        
        {!submitted ? (
        <form
            onSubmit={handleSubmit}
            className="p-8 shadow-lg rounded-md w-full max-w-lg"
            style={{ backgroundColor: backgroundFormColor }}
        >
            <div className="mb-6">
            <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
            >
                Name
            </label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                placeholder="Enter your name"
                required
            />
            </div>
            
            <div className="mb-6">
            <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
            >
                Email
            </label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                placeholder="Enter your email"
                required
            />
            </div>

            <div className="mb-6">
            <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
            >
                Message
            </label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                placeholder="Enter your message"
                rows={5}
                required
            />
            </div>

            <div className="flex justify-center">
            <button
                type="submit"
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
            >
                Send Message
            </button>
            </div>
        </form>
        ) : (
        <div className="text-center p-8 shadow-lg rounded-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Thank you for contacting us!</h2>
            <p className="text-white">
            We have received your message and will get back to you soon.
            </p>
        </div>
        )}
    </div>
    );
    };

export default SectionContact;
