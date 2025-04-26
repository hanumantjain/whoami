import React from 'react';

const Contact = () => {
  return (
    <div
      id="hanumant jain contact"
      className="w-full max-w-5xl mx-auto text-center py-20 px-10"
    >
      <h2 className="text-5xl text-center mb-20 font-bold">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="border rounded-2xl p-10 shadow-lg border-neutral-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-3xl font-semibold mb-4">Email</h3>
          <p className="text-lg hover:underline">
            <a href="mailto:hanumantjain939@gmail.com">hanumantjain939@gmail.com</a>
          </p>
        </div>

        <div className="border rounded-2xl border-neutral-800 p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-3xl font-semibold mb-4">Connect with me</h3>
          <div className="flex flex-col items-center gap-4 text-lg">
            <a
              href="https://github.com/hanumantjain"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hanumant-jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
