import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = ({ heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold text-center text-[#7F5283] mb-6"
      >
        {heading}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg text-gray-700 text-center"
      >
        {paragraph}
      </motion.p>
      <a href="/" className="block mx-auto my-4 py-2 px-4 w-auto bg-ctaBg text-white hover:bg-ctaHover rounded transition duration-300 text-center">Go back home</a>
    </div>
  );
};

export default ComingSoon;
