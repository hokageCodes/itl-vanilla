import React from 'react';
import { motion } from 'framer-motion';

const slideInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInVariants}
    >
      <div className="relative bg-[#FEFBF6] py-8" id="about-us">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-textPrimary space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold my-2">Welcome to The ITL Conference '25</h2>
              <p className="text-md text-textDark lg:text-lg">
                The ITL Conference is the largest gathering of Internationally Trained Lawyers (ITLs) in Canada. The Conference will feature different legal professionals, regulators, change makers, and other stakeholders committed to supporting ITLs in their legal practice journey in Canada. The ITL Conference is a joint effort of our partner organizations: The ITL Network and Global Lawyers of Canada.
              </p>
              <div>
                <button className="bg-ctaBg text-white hover:bg-ctaHover rounded-md px-6 py-3 transition duration-300 ease-in-out">
                  <a href="/pre-register">Pre Register</a>
                </button>
              </div>
            </div>
            
            {/* Image Content with Tilt */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="transform -rotate-6 hover:rotate-0 transition duration-500">
                <img
                  src="/assets/confe.png"
                  alt="About the Conference"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-2xl"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
