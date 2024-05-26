import React from 'react';

const ScheduleCard = ({
  title,
  speakerName,
  speakerRole,
  time,
  location,
  speakerImage,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center">
      <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-textPrimary mx-auto">
        <img src={speakerImage} alt={speakerName} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-black text-textPrimary">{title}</h3>
      <p className="text-sm text-textPrimary">{`${speakerName} / ${speakerRole}`}</p>
      <div className="text-xs text-black">
        <p>{time}</p>
        <p>{location}</p>
      </div>
      <button className="bg-ctaBg text-white hover:bg-ctaHover rounded px-4 py-2 text-sm mt-2">View More →</button>
    </div>
  );
};

export default ScheduleCard;
