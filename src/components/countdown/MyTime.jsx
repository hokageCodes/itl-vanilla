import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex justify-center space-x-1 md:space-x-2 p-2 md:p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-xl max-w-full">
      {['days', 'hours', 'minutes', 'seconds'].map((interval, index) => (
        <React.Fragment key={interval}>
          <div className="flex flex-col items-center px-1 py-2 md:px-2">
            <div className="relative bg-gray-900 text-white font-mono text-2xl md:text-4xl p-2 rounded-md flex items-center justify-center w-12 h-12 md:w-20 md:h-20 shadow-lg">
              <span>{timeLeft[interval].toString().padStart(2, '0')}</span>
              <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-gray-700"></div>
            </div>
            <div className="text-gray-400 text-xs uppercase mt-1 md:mt-2">{interval}</div>
          </div>
          {index < 3 && (
            <div className="mb-6 flex items-center justify-center text-white text-2xl md:text-4xl font-mono mx-1 md:mx-2">
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countdown;
