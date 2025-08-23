import React from "react";

const Gif = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-6 rounded-3xl shadow-2xl bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-500 flex flex-col items-center">
        <img
          src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif"
          alt="Fun GIF"
          className="w-64 h-64 object-cover rounded-xl mb-4 animate-bounce"
        />
        <p className="text-gray-800 dark:text-gray-100 font-semibold text-lg">
          Enjoy this awesome GIF! 🎉
        </p>
      </div>
    </div>
  );
};

export default Gif;
