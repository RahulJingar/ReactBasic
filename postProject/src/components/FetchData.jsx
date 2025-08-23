import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseCustomHook from "./UseCustomHook";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { Dark, isDark } = UseCustomHook();

  const axiosData = async () => {
    const res = await axios.get("https://dummyjson.com/posts");
    setPosts(res.data.posts);
  };

  useEffect(() => {
    axiosData();
  }, []);

  return (
    <div className={`${Dark ? "bg-gray-900" : "bg-gray-100"} min-h-screen py-10 px-5`}>
      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h1 className={`text-4xl font-bold ${Dark ? "text-white" : "text-gray-800"}`}>
          🚀 Latest Posts
        </h1>
        <button
          onClick={isDark}
          className={`px-4 py-2 cursor-pointer rounded-lg font-medium transition-colors ${
            Dark
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-yellow-300 text-gray-800 hover:bg-yellow-400"
          }`}
        >
          {Dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((item) => (
          <div
            key={item.id}
            className={`rounded-3xl shadow-xl transition-all duration-300 p-6 flex flex-col justify-between border ${
              Dark ? "bg-gray-800 text-gray-100 border-gray-700 hover:shadow-2xl" : "bg-white text-gray-800 border-gray-200 hover:shadow-2xl"
            } hover:scale-105`}
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 line-clamp-1">{item.title}</h3>

            {/* Body */}
            <p className="text-sm mb-4 line-clamp-3">{item.body}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags?.map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    Dark ? "bg-indigo-700 text-indigo-100" : "bg-green-100 text-green-700"
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* View Details Button */}
            <button
              className="w-full py-2 mt-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate(`/data/${item.id}`)}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
