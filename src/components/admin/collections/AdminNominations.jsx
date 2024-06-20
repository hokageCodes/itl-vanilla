import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import { CSVLink } from 'react-csv';
import { FaFilter } from 'react-icons/fa';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AdminNominations = () => {
  const [nominations, setNominations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    startDate: null,
    endDate: null
  });
  const [filteredNominations, setFilteredNominations] = useState([]);

  useEffect(() => {
    const fetchNominations = async () => {
      const firestore = getFirestore(app);
      const querySnapshot = await getDocs(collection(firestore, 'nominationsSubmissions'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNominations(data);
      setFilteredNominations(data);
    };

    fetchNominations();
  }, []);

  useEffect(() => {
    const filteredData = nominations.filter(item => {
      const itemDate = new Date(item.timestamp.seconds * 1000);
      const startDateMatch = filters.startDate ? itemDate >= filters.startDate : true;
      const endDateMatch = filters.endDate ? itemDate <= filters.endDate : true;
      const nameMatch = item.formData["Nominee's Name"].toLowerCase().includes(filters.name.toLowerCase());
      const emailMatch = item.formData["Nominee's Email"].toLowerCase().includes(filters.email.toLowerCase());
      const phoneMatch = item.formData["Nominator's Telephone Number"].toLowerCase().includes(filters.phone.toLowerCase());
      const categoryMatch = item.formData['Nomination Category'].toLowerCase().includes(filters.category.toLowerCase());

      return startDateMatch && endDateMatch && nameMatch && emailMatch && phoneMatch && categoryMatch;
    });
    setFilteredNominations(filteredData);
  }, [filters, nominations]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNominations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNominations.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // CSV headers
  const headers = [
    { label: "Nominator's Name", key: "formData.Nominator's Name" },
    { label: "Nominator's Telephone Number", key: "formData.Nominator's Telephone Number" },
    { label: "Nominator's Email", key: "formData.Nominator's Email" },
    { label: "Nominee's Name", key: "formData.Nominee's Name" },
    { label: "Nominee's Email", key: "formData.Nominee's Email" },
    { label: "Nomination Category", key: "formData.Nomination Category" },
    { label: "Reason(s) for nominating", key: "formData.Reason(s) for nominating" },
    { label: "Web Links and Supporting Documentation", key: "formData.Web Links and Supporting Documentation" },
    { label: "Timestamp", key: "timestamp" }
  ];

  // Convert timestamp to readable format for CSV
  const csvData = filteredNominations.map(item => ({
    ...item,
    timestamp: new Date(item.timestamp.seconds * 1000).toLocaleString()
  }));

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setFilters(prev => ({ ...prev, [name]: date }));
  };

  const handleFilterReset = () => {
    setFilters({
      name: '',
      email: '',
      phone: '',
      category: '',
      startDate: null,
      endDate: null
    });
  };

  return (
    <div className="relative overflow-x-auto p-4 mt-24">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Nominations</h2>
        <div className="flex items-center">
          <CSVLink 
            data={csvData} 
            headers={headers} 
            filename={"nominations.csv"}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4"
          >
            Export to CSV
          </CSVLink>
          <button onClick={openModal} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            <FaFilter />
          </button>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Nominator's Name</th>
            <th scope="col" className="px-6 py-3">Nominator's Telephone Number</th>
            <th scope="col" className="px-6 py-3">Nominator's Email</th>
            <th scope="col" className="px-6 py-3">Nominee's Name</th>
            <th scope="col" className="px-6 py-3">Nominee's Email</th>
            <th scope="col" className="px-6 py-3">Nomination Category</th>
            <th scope="col" className="px-6 py-3">Reason(s) for nominating</th>
            <th scope="col" className="px-6 py-3">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(nomination => (
            <tr key={nomination.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 text-black">{nomination.formData["Nominator's Name"]}</td>
              <td className="px-6 py-4 text-black">{nomination.formData["Nominator's Telephone Number"]}</td>
              <td className="px-6 py-4 text-black">{nomination.formData["Nominator's Email"]}</td>
              <td className="px-6 py-4 text-black">{nomination.formData["Nominee's Name"]}</td>
              <td className="px-6 py-4 text-black">{nomination.formData["Nominee's Email"]}</td>
              <td className="px-6 py-4 text-black">{nomination.formData['Nomination Category']}</td>
              <td className="px-6 py-4 text-black">{nomination.formData['Reason(s) for nominating']}</td>
              <td className="px-6 py-4 text-black">{new Date(nomination.timestamp.seconds * 1000).toLocaleString()}</td>
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

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Filter Modal" className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Filter Nominations</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Nominee's Name</label>
          <input 
            type="text" 
            name="name" 
            value={filters.name} 
            onChange={handleFilterChange} 
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Nominee's Email</label>
          <input 
            type="text" 
            name="email" 
            value={filters.email} 
            onChange={handleFilterChange} 
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Nominator's Telephone Number</label>
          <input 
            type="text" 
            name="phone" 
            value={filters.phone} 
            onChange={handleFilterChange} 
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Nomination Category</label>
          <input 
            type="text" 
            name="category" 
            value={filters.category} 
            onChange={handleFilterChange} 
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Start Date</label>
          <DatePicker 
            selected={filters.startDate} 
            onChange={(date) => handleDateChange('startDate', date)} 
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">End Date</label>
          <DatePicker 
            selected={filters.endDate} 
            onChange={(date) => handleDateChange('endDate', date)} 
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex justify-between">
          <button onClick={handleFilterReset} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Reset
          </button>
          <button onClick={closeModal} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Apply
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminNominations;

