import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-12 pb-6 mt-20 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
     
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-200">Follow Me</h2>

        <div className="flex space-x-8">
          <Link
            to="https://www.linkedin.com/in/rahul-jingar-967078340/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </Link>

          {/* GitHub */}
          <Link
            to="https://github.com/RahulJingar"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </Link>

          <Link
            to="https://www.instagram.com/rahul_jingar27/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          © 2025 Rahul Jingar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
