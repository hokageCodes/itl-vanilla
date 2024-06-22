import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebaseConfig';

const firestore = getFirestore(app);

const SuccessComponent = ({ onBack }) => (
  <div className="p-8 mt-24 md:border-l md:w-2/3 flex flex-col items-center">
    <div className="flex items-center justify-center text-green-500 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 19a9 9 0 100-18 9 9 0 000 18zM9 5a1 1 0 112 0v5a1 1 0 11-2 0V5zm1 11a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="text-center text-lg font-semibold text-green-500">Thank you for volunteering!</div>
    <div className="text-center mt-4">
      <button onClick={onBack} className="text-blue-500 underline">Go back home</button>
    </div>
  </div>
);

const Volunteer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [otherLocation, setOtherLocation] = useState('');
  const [committee, setCommittee] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalLocation = location === 'Other' ? otherLocation : location;

    setError('');
    setSuccess(false);

    try {
      if (!name || !email || !phoneNumber || !location || !committee) {
        setError('Please fill out all required fields.');
        return;
      }

      setLoading(true);

      await addDoc(collection(firestore, 'volunteersSubmissions'), {
        name,
        email,
        phoneNumber,
        location: finalLocation,
        committee,
        timestamp: new Date(),
      });

      setName('');
      setEmail('');
      setPhoneNumber('');
      setLocation('');
      setOtherLocation('');
      setCommittee('');

      setSuccess(true);
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 pt-16 md:pt-0">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="p-8 space-y-4 md:w-1/2 bg-textPrimary text-white">
          <h2 className="text-3xl font-black pt-24">Volunteer with Us</h2>
          <p className="text-md">Join our volunteer team to make a significant impact and be a part of history. Volunteering gives you the opportunity to contribute, learn, and connect with fellow ITLs at the conference.</p>
        </div>
        {success ? (
          <SuccessComponent onBack={handleGoBack} />
        ) : (
          <div className="p-8 md:border-l md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="text-red-500">{error}</div>}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <select
                  id="location"
                  name="location"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Select Province or Territory</option>
                  <option value="Alberta">Alberta</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="New Brunswick">New Brunswick</option>
                  <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                  <option value="Nova Scotia">Nova Scotia</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Prince Edward Island">Prince Edward Island</option>
                  <option value="Quebec">Quebec</option>
                  <option value="Saskatchewan">Saskatchewan</option>
                  <option value="Northwest Territories">Northwest Territories</option>
                  <option value="Nunavut">Nunavut</option>
                  <option value="Yukon">Yukon</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {location === 'Other' && (
                <div>
                  <label htmlFor="otherLocation" className="block text-sm font-medium text-gray-700">Please Specify</label>
                  <input
                    id="otherLocation"
                    name="otherLocation"
                    type="text"
                    required={location === 'Other'}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    value={otherLocation}
                    onChange={(e) => setOtherLocation(e.target.value)}
                  />
                </div>
              )}
              <div>
                <label htmlFor="committee" className="block text-sm font-medium text-gray-700">Choose your Committee</label>
                <select
                  id="committee"
                  name="committee"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={committee}
                  onChange={(e) => setCommittee(e.target.value)}
                >
                  <option value="">Select a Committee</option>
                  <option value="Programs">Programs</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Awards">Awards</option>
                  <option value="Registration">Registration</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Exhibition">Exhibition</option>
                  <option value="Publicity">Publicity</option>
                </select>
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 bg-textPrimary text-white hover:bg-ctaHover rounded focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Volunteer'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Volunteer;
