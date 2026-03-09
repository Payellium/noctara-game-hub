import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
        bg-linear-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-center"
    >
      {/* 404 Text */}
      <motion.h1
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-8xl font-extrabold text-purple-400"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-xl text-gray-300"
      >
        You've reached a forbidden level.
      </motion.p>

      {/* N Logo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="mt-8 w-20 h-20 rounded-full border-4 border-purple-500 
        flex items-center justify-center shadow-[0_0_25px_#a855f7]"
      >
        <span className="text-3xl font-bold">N</span>
      </motion.div>

      {/* Button */}
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-10 px-6 py-3 bg-purple-600 rounded-lg font-semibold 
          hover:bg-purple-500 transition"
        >
          Return to Base
        </motion.button>
      </Link>
    </div>
  );
};

export default ErrorPage;
