import React, { useState, useEffect } from 'react';
import VideoBackground from '../video-bg/VideoBackground';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  background-color: transparent;
  color: #EFE1D1;
  min-height: 100vh; // Ensure full screen height
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: flex-start; // Align items to the left
  justify-content: flex-start; // Align content to the left
  z-index: 10;

  @media (max-width: 768px) {
    padding: 4rem 1rem; // Increase padding on smaller screens
    top: 50%; // Center content vertically on mobile
    transform: translateY(-50%);
    align-items: center; // Center items vertically on mobile
    justify-content: center; // Center content horizontally on mobile
  }
`;

const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 36rem; // Limit max width for better readability
  margin: 0 1rem; // Ensure some margin on smaller screens
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align items to the left
  margin-top: 100px;

  h1 {
  max-width: 500px;
    // border: 1px solid red;
  }

  @media (max-width: 768px) {
    text-align: center; // Center text on mobile
    align-items: center; // Center items horizontally on mobile
  }

  h1, p {
    margin-bottom: 1rem; // Add space between heading and paragraphs
  }

  .countdown-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem; // Add space between countdown and paragraphs

    .countdown-item {
      text-align: center; // Center text within each countdown item
      margin-right: 1rem; // Add spacing between countdown items
    }
  }
  
  .countdown-text {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem; // Add space between countdown text and buttons
    color: #FFF;

    p {
      margin: 0 0.5rem; // Add spacing between countdown text items
    }
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    width: 100%; // Buttons take full width of the container
    align-items: flex-start; // Align buttons to the left

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }

    a {
      margin: 0.5rem 0; // Adds margin around buttons for separation
      @media (min-width: 768px) {
        margin: 0 0.5rem; // Adjusts margin for horizontal layout
      }
    }
  }
`;

const Hero = () => {
  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date('April 3, 2025 00:00:00').getTime();
      const currentTime = new Date().getTime();
      const timeLeft = eventDate - currentTime;

      setTimer({
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <VideoBackground src="../../assets/hero-video.mp4" />
      <ContentContainer>
        <TextContainer>
          <h1 className='hero-deco text-5xl font-black'>THE ITL CONFERENCE &#39;25</h1>
          <p className='text-2xl font-bold'>Crossing Borders, Breaking Barriers.</p>
          <p className='text-lg'>April 3-5, 2025 - Calgary, Alberta</p>
          <div className="countdown-container">
            {Object.entries(timer).map(([unit, value]) => (
              <div key={unit} className="countdown-item">
                <CircularProgressbar
                  value={value}
                  maxValue={unit === 'days' ? 365 : 60}
                  text={`${value}`}
                  styles={buildStyles({
                    pathColor: `rgba(62, 152, 199, ${value / 100})`,
                    textColor: '#fff',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />
                <p>{unit}</p>
              </div>
            ))}
          </div>

          <div className="buttons-container">
            <a href="/pre-register" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-textPrimary font-bold py-3 px-6 rounded-lg transition-colors duration-300">Pre-Register Now</a>
            <a href="/sponsor" className="border border-[#A78295] hover:bg-ctaBg hover:text-bg text-bg font-bold py-3 px-6 rounded-lg transition-colors duration-300">Become a Sponsor</a>
          </div>
        </TextContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
