import React from 'react';
import PartnerLogo from './PartnerLogo'; 

// Define your partner data
const partners = [
  {
    name: 'Google',
    logoSrc: '/assets/svgs/anothest.png',
    url: 'https://google.com',
  },
  {
    name: 'Google',
    logoSrc: '/assets/svgs/Logos.png',
    url: 'https://google.com',
  },
  {
    name: 'Google',
    logoSrc: '/assets/svgs/3.png',
    url: 'https://google.com',
  },
  {
    name: 'Google',
    logoSrc: '/assets/svgs/4.png',
    url: 'https://google.com',
  },
  // Add more partners as needed
];

const PartnersSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-black mb-8 text-[#7F5283]">Conference Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
