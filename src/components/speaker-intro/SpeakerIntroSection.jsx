import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SpeakerIntroSection = () => {
  const imageVariants = {
    hidden: { scale: 0.9, rotateY: -30, opacity: 0, x: -50 },
    visible: {
      scale: 1,
      rotateY: 0,
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 },
    },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Animated image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          className="w-full lg:w-1/3"
        >
          <img src="/assets/keynote.png" alt="Keynote Speaker" className="w-full h-auto" />
        </motion.div>

        {/* Text and CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="w-full lg:w-2/3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-textPrimary font-black mb-4">
            Meet Our Keynote Speaker
          </h2>
          <p className="mb-6 text-lg">
            “Watch this space for more details as we unveil the keynote speaker for the ITL Conference 2025"
          </p>
          <div>
            <Link
              to="/speakers"
              className="inline-block bg-ctaBg text-white hover:bg-ctaHover rounded font-bold py-2 px-4 transition-colors duration-300"
            >
              See All Speakers
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpeakerIntroSection;
