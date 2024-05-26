import React from 'react';

const AdminHeader = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      {/* Add logout button or other admin controls here */}
    </header>
  );
};

export default AdminHeader;
