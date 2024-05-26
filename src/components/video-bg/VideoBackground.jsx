import React from 'react';

const VideoBackground = ({ src }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
