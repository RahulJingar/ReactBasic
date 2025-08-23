import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import UseCustomHook from "./UseCustomHook";
import { useNavigate } from "react-router-dom";
import Gif from "./Gif";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { Dark, isDark } = UseCustomHook();
  const navigate = useNavigate();

  const axiosData = async () => {
    const res = await axios.get(`https://dummyjson.com/posts/${id}`);
    setPost(res.data);
  };

  useEffect(() => {
    axiosData();
  }, [id]);

  if (!post) return <p className="text-center mt-20 text-xl text-gray-500">
    <Gif/>
  </p>;

  return (
    <div className={`${Dark ? "bg-gray-900" : "bg-gray-100"} min-h-screen py-10`}>
      <motion.div
        className={`max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl ${
          Dark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        }`}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold tracking-wide">Post #{post.id}</h2>
          <button
            onClick={isDark}
            className={`px-5 py-2 rounded-lg font-medium cursor-pointer shadow-md transition-all ${
              Dark
                ? "bg-gray-700 text-white hover:bg-gray-600 transform hover:-translate-y-1"
                : "bg-yellow-300 text-gray-800 hover:bg-yellow-400 transform hover:-translate-y-1"
            }`}
          >
            {Dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                Dark ? "bg-indigo-700 text-indigo-100" : "bg-indigo-100 text-indigo-700"
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 rounded-lg cursor-pointer bg-gray-300 hover:bg-gray-400 shadow-sm"
        >
          ← Back
        </button>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div
            className={`p-4 rounded-xl shadow-lg ${
              Dark ? "bg-indigo-700 text-indigo-100" : "bg-indigo-100 text-indigo-700"
            }`}
          >
            👍 Likes
            <p className="font-bold text-lg mt-1">{post.reactions.likes}</p>
          </div>
          <div
            className={`p-4 rounded-xl shadow-lg ${
              Dark ? "bg-red-700 text-red-100" : "bg-red-100 text-red-700"
            }`}
          >
            👎 Dislikes
            <p className="font-bold text-lg mt-1">{post.reactions.dislikes}</p>
          </div>
          <div
            className={`p-4 rounded-xl shadow-lg ${
              Dark ? "bg-green-700 text-green-100" : "bg-green-100 text-green-700"
            }`}
          >
            👀 Views
            <p className="font-bold text-lg mt-1">{post.views}</p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          className="w-full py-3 mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 font-semibold cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide All Details" : "Show All Details"}
        </button>

        {/* Extra Details */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              className={`p-6 rounded-xl shadow-inner ${
                Dark ? "bg-gray-700 text-gray-100" : "bg-gray-50 text-gray-800"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3">
                <span className="font-semibold">Title:</span> {post.title}
              </p>
              <p className="mb-3">
                <span className="font-semibold">Body:</span> {post.body}
              </p>
              <p className="mb-3">
                <span className="font-semibold">User ID:</span> {post.userId}
              </p>
              <p className="mb-3">
                <span className="font-semibold">Tags:</span> {post.tags.join(", ")}
              </p>
              <p className="mb-3">
                <span className="font-semibold">👍 Likes:</span> {post.reactions.likes}
              </p>
              <p className="mb-3">
                <span className="font-semibold">👎 Dislikes:</span> {post.reactions.dislikes}
              </p>
              <p>
                <span className="font-semibold">👀 Views:</span> {post.views}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PostDetails;
