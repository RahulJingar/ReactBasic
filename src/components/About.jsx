import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex items-center  cursor-pointer h-[700px]  justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="max-w-3xl bg-white shadow-xl hover:scale-110 transition-transform duration-900 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our website! We are a team of passionate developers and designers working together to build meaningful web experiences. Our mission is to create high-quality, user-friendly, and innovative products that solve real-world problems.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            We believe in the power of technology to bring change. Whether it's simplifying tasks or enabling new possibilities, we aim to be at the forefront of impactful digital solutions.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Passionate and experienced team</li>
            <li>Focus on clean UI and smooth UX</li>
            <li>Continuous improvement & learning</li>
            <li>Client-first approach</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default About
