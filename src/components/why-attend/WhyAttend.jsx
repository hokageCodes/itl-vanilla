import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa';

// Animation for the card
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center p-6 max-w-sm bg-[#292D3E] rounded-lg border border-gray-700 shadow-md text-center"
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.5 }}
  >
    <Icon className="mb-4 w-10 h-10 text-[#A78295]" />
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
    <p className="font-normal text-gray-400">{description}</p>
  </motion.div>
);

const WhyAttendSection = () => {
  const features = [
    {
      icon: FaUsers,
      title: 'Networking',
      description: 'Connect with fellow legal professionals and a supportive community of ITLs facing similar challenges and opportunities.',
    },
    {
      icon: FaBrain,
      title: 'Professional Development',
      description: 'Hear from leading professionals in private practice, in-house, government agencies and experts from across all practice areas.',
    },
    {
      icon: FaAward,
      title: 'Cultural Competency',
      description: 'Understanding and navigating cultural differences in legal practice is crucial. The conference will equip you with the knowledge and skills needed to thrive in a diverse and multicultural legal environment.',
    },
    {
      icon: FaLightbulb,
      title: 'Career Opportunities',
      description: 'Connect with employers and recruiters. The Conference will feature career development strategies, job search techniques, and other opportunities to differentiate yourself in the job market.',
    },
  ];

  return (
    <div className="py-16 bg-white text-[#7F5283]">
      <div className="container mx-auto px-4">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black mb-12">
        Why Attend the ITL Conference?
      </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} Icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyAttendSection;
