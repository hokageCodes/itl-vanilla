import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { Transition } from '@headlessui/react';

const AdminNavbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin-login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white text-black px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/admin">
          <img className="h-12" src="/assets/logo.png" alt="Logo" />  
        </a>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative group">
          <button
            className="hover:bg-gray-700 px-3 py-2 rounded-md focus:outline-none"
            onClick={toggleDropdown}
          >
            Submissions
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
              <Link to="/admin/submissions/volunteers" className="block px-4 py-2 hover:bg-gray-100">Volunteers</Link>
              <Link to="/admin/submissions/registrations" className="block px-4 py-2 hover:bg-gray-100">Registrations</Link>
              <Link to="/admin/submissions/nominations" className="block px-4 py-2 hover:bg-gray-100">Nominations</Link>
            </div>
          )}
        </div>
      </div>

      {/* Admin Info and Logout Button */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="text-right">
          <div className="text-md font-medium">{currentUser?.displayName}</div>
          <div className="text-xs">{currentUser?.email}</div>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
        >
          Logout
        </button>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Nav Links */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition ease-in duration-200"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
      >
        <div className="fixed inset-0 bg-black text-white bg-opacity-95 z-50 flex flex-col justify-center items-center text-center md:hidden">
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center flex-grow">
            <button
              className="w-full text-left px-3 py-2 hover:bg-gray-700 focus:outline-none"
              onClick={toggleDropdown}
            >
              Submissions
            </button>
            {dropdownOpen && (
              <div className="w-full mt-2 bg-white text-gray-800 rounded-md shadow-lg">
                <Link to="/admin/submissions/admin-volunteers" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Volunteers</Link>
                <Link to="/admin/submissions/admin-registrations" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Registrations</Link>
                <Link to="/admin/submissions/admin-nominations" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Nominations</Link>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center mt-5">
            <div className="text-sm font-medium">{currentUser?.displayName}</div>
            <div className="text-xs">{currentUser?.email}</div>
            <button
              onClick={handleLogout}
              className="mt-5 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default AdminNavbar;
