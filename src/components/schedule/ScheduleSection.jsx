import React, { useState } from 'react';
import ScheduleTab from './ScheduleTab';

const ScheduleSection = () => {
  const [activeTabDate, setActiveTabDate] = useState('Thursday, April 3, 2025');

  const tabs = [
    { day: 'Thursday', date: 'Thursday, April 3, 2025' },
    { day: 'Friday', date: 'Friday, April 4, 2025' },
    { day: 'Saturday', date: 'Saturday, April 5, 2025' },
  ];

  const allEvents = [
    // Events for Thursday
    {
      title: 'Opening ceremony',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '6pm - 9pm MST',
      date: 'Thursday, April 3, 2025',
      location: 'Calgary, Alberta',
    },
    // Events for Friday
    {
      title: 'TBD',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '9am - 11am MST',
      date: 'Friday, April 4, 2025',
      location: 'Calgary, Alberta',
    },
    {
      title: 'TBD',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '11am - 1pm',
      date: 'Friday, April 4, 2025',
      location: 'Calgary, Alberta',
    },
    {
      title: 'TBD',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '1pm - 3pm',
      date: 'Friday, April 4, 2025',
      location: 'Calgary, Alberta',
    },
    {
      title: 'TBD',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '3pm - 5pm',
      date: 'Friday, April 4, 2025',
      location: 'Calgary, Alberta',
    },
    // Events for Saturday
    {
      title: 'The Impact Awards/Gala',
      speakerName: 'TBD',
      speakerRole: '',
      time: '6pm - 9pm MST',
      date: 'Saturday, April 5, 2025',
      location: 'Calgary, Alberta',
    },
  ];

  const eventsToShow = allEvents.filter((event) => event.date === activeTabDate);

  return (
    <section className="bg-ctaBg text-bg py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Schedule Plan</h2>
        </div>
        <div className="flex justify-center mb-8 space-x-2">
          {tabs.map((tab) => (
            <ScheduleTab
              key={tab.date}
              day={tab.day}
              date={tab.date}
              isActive={activeTabDate === tab.date}
              onClick={() => setActiveTabDate(tab.date)}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center">
          {eventsToShow.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="font-black text-textPrimary">{event.title}</h3>
              <p className="text-sm text-textPrimary">{event.speakerName}</p>
              <p className="text-sm text-textPrimary">{event.speakerRole}</p>
              <p className="text-xs text-black">{event.time}</p>
              <p className="text-xs text-black">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
