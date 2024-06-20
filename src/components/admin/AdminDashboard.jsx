import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../firebaseConfig';

const AdminAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    totalSubmissions: 0,
    registrationSubmissions: 0,
    volunteerSubmissions: 0,
    nominationSubmissions: 0,
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      const firestore = getFirestore(app);

      try {
        // Fetch registration submissions
        const registrationQuerySnapshot = await getDocs(collection(firestore, 'registrationsSubmissions'));
        const registrationCount = registrationQuerySnapshot.size;

        // Fetch volunteer submissions
        const volunteerQuerySnapshot = await getDocs(collection(firestore, 'volunteersSubmissions'));
        const volunteerCount = volunteerQuerySnapshot.size;

        // Fetch nomination submissions
        const nominationQuerySnapshot = await getDocs(collection(firestore, 'nominationsSubmissions'));
        const nominationCount = nominationQuerySnapshot.size;

        // Calculate total submissions
        const totalSubmissions = registrationCount + volunteerCount + nominationCount;

        setAnalytics({
          totalSubmissions,
          registrationSubmissions: registrationCount,
          volunteerSubmissions: volunteerCount,
          nominationSubmissions: nominationCount,
        });
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="p-4 mt-24">
      <h2 className="text-2xl font-bold mb-4">Form Submissions Analytics</h2>
      <div className="bg-white p-4 rounded shadow-lg mb-4">
        <h3 className="text-xl font-semibold">Total Submissions</h3>
        <p className="text-2xl">{analytics.totalSubmissions}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-lg mb-4">
        <h3 className="text-xl font-semibold">Registration Submissions</h3>
        <p className="text-lg">{analytics.registrationSubmissions}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-lg mb-4">
        <h3 className="text-xl font-semibold">Volunteer Submissions</h3>
        <p className="text-lg">{analytics.volunteerSubmissions}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold">Nomination Submissions</h3>
        <p className="text-lg">{analytics.nominationSubmissions}</p>
      </div>
    </div>
  );
};

export default AdminAnalytics;
