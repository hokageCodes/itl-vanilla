import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import { CSVLink } from 'react-csv';
import { FaFilter } from 'react-icons/fa';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root');

const AdminVolunteersSubmissions = () => {
  const [volunteerSubmissions, setVolunteerSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchVolunteerSubmissions = async () => {
      const firestore = getFirestore(app);
      const querySnapshot = await getDocs(collection(firestore, 'volunteersSubmissions'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVolunteerSubmissions(data);
      setFilteredSubmissions(data);
    };

    fetchVolunteerSubmissions();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = volunteerSubmissions;

    if (startDate) {
      filtered = filtered.filter(submission => 
        new Date(submission.timestamp.seconds * 1000) >= startDate
      );
    }

    if (endDate) {
      filtered = filtered.filter(submission => 
        new Date(submission.timestamp.seconds * 1000) <= endDate
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(submission =>
        submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.phoneNumber.includes(searchTerm)
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(submission => 
        submission.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredSubmissions(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [startDate, endDate, searchTerm, locationFilter, volunteerSubmissions]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSubmissions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleFilterReset = () => {
    setStartDate(null);
    setEndDate(null);
    setSearchTerm('');
    setLocationFilter('');
  };

  // CSV headers
  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Location", key: "location" },
    { label: "Timestamp", key: "timestamp" }
  ];

  // Convert timestamp to readable format for CSV
  const csvData = filteredSubmissions.map(item => ({
    ...item,
    timestamp: new Date(item.timestamp.seconds * 1000).toLocaleString()
  }));

  return (
    <div className="relative overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Volunteer Submissions</h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <CSVLink 
          data={csvData} 
          headers={headers} 
          filename={"volunteer-submissions.csv"}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Export to CSV
        </CSVLink>
        <button 
          onClick={handleModalOpen} 
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <FaFilter className="mr-2" /> Filters
        </button>
      </div>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="Filter Modal"
        className="bg-white p-8 rounded shadow-lg max-w-md mx-auto my-20"
      >
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search by name, email, phone"
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by location"
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button 
            onClick={handleFilterReset} 
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Reset
          </button>
          <button 
            onClick={handleModalClose} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      </Modal>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Phone Number</th>
            <th scope="col" className="px-6 py-3">Location</th>
            <th scope="col" className="px-6 py-3">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(submission => (
            <tr key={submission.id} className="bg-white border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {submission.name}
              </th>
              <td className="px-6 py-4 text-black">{submission.email}</td>
              <td className="px-6 py-4 text-black">{submission.phoneNumber}</td>
              <td className="px-6 py-4 text-black">{submission.location}</td>
              <td className="px-6 py-4 text-black">{new Date(submission.timestamp.seconds * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={handlePrevPage} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminVolunteersSubmissions;
