import React from 'react';

const ScheduleTab = ({ day, date, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 border rounded-lg text-sm font-semibold focus:outline-none ${
        isActive ? 'bg-bg text-textPrimary' : 'text-white hover:bg-bg hover:text-textPrimary'
      }`}
      onClick={onClick}
    >
      <div className="text-xs font-semibold">{day}</div>
      <div className="">{date}</div>
    </button>
  );
};

export default ScheduleTab;
