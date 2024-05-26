import React, { useState, useEffect } from 'react';
import ComingSoon from '../components/coming-soon/ComingSoon';
import Loader from '../components/loader/Loader';

export default function SpeakersPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ComingSoon 
            heading="Coming Soon"
            paragraph="Watch this space for more details as we unveil the speakers for the ITL Conference 2025!"
          />
        </div>
      )}
    </>
  );
}
