import React from 'react';

const AdminMainContent = ({ children }) => {
  return (
    <main className="ml-0 sm:ml-64 mt-16 p-4">
      {children}
    </main>
  );
};

export default AdminMainContent;
