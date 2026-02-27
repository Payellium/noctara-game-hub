import React from "react";
import { motion } from "framer-motion";

const Animation = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      
      {/* Hero Text */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-0 md:mb-6 text-white tracking-widest text-center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.1, color: "#9c27b0" }}
      >
         NOCTARA
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-2 md:mt-8 hidden md:block lg:block text-lg md:text-2xl text-fuchsia-200 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Discover, collect, and experience games like never before in Noctara — your ultimate gaming library.
      </motion.p>

    </div>
  );
};

export default Animation;