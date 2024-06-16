import React from 'react';

const PartnerLogo = ({ name, logoSrc, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="partner-logo mx-4 my-2 hover:scale-110 transition-transform duration-300">
      <img src={logoSrc} alt={name} width={140} height={80} style={{ objectFit: 'contain' }} />
    </a>
  );
};

export default PartnerLogo;
