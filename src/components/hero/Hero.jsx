import React from 'react';
import VideoBackground from '../../components/video-bg/VideoBackground';
import Countdown from '../../components/countdown/MyTime';

const Hero = () => {
  return (
    <div className="relative bg-transparent text-[#EFE1D1] min-h-screen hero-section">
      <VideoBackground src="/assets/hero-video.mp4" />
      <div className="absolute top-10 left-0 w-full p-4 flex items-start justify-center z-10 md:top-1/2 md:transform md:-translate-y-1/2 md:p-16 md:items-center hero-container">
        <div className="bg-black bg-opacity-60 p-8 mt-16 rounded-md shadow-lg max-w-xl m-4 flex flex-col items-center text-center md:max-w-2xl">
          <h1 className="hero-deco text-2xl font-black md:text-5xl">THE ITL CONFERENCE '25</h1>
          <p className="text-lg font-bold mt-2 md:text-2xl">Crossing Borders, Breaking Barriers.</p>
          <p className="text-lg font-semibold mt-1 mb-4 md:text-2xl">April 3-5, 2025 - Calgary, Alberta</p>
          
          {/* Countdown Component */}
          <div className="flex justify-center mb-4 w-full">
            <Countdown targetDate="2025-06-19T00:00:00" />
          </div>

          <div className="flex flex-col w-full items-center md:flex-row md:justify-center">
            <a href="/pre-register" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-textPrimary font-bold py-3 px-6 rounded-lg transition-colors duration-300 mb-2 md:mb-0 md:mr-2">Pre-Register Now</a>
            <a href="/sponsor" className="border border-[#A78295] hover:bg-ctaBg hover:text-bg text-bg font-bold py-3 px-6 rounded-lg transition-colors duration-300">Become a Sponsor</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
