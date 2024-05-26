import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-gray-200 w-64 h-screen fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Admin Panel</h1>
        <nav>
          <ul>
            <li>
              <Link to="/admin/pre-registrations" className="block py-2 hover:bg-gray-700">Pre-registrations</Link>
            </li>
            <li>
              <Link to="/admin/sponsors" className="block py-2 hover:bg-gray-700">Sponsors</Link>
            </li>
            <li>
              <Link to="/admin/volunteers" className="block py-2 hover:bg-gray-700">Volunteers</Link>
            </li>
            <li>
              <Link to="/admin/nominations" className="block py-2 hover:bg-gray-700">Nominations</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
