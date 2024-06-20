import React from 'react';
import AdminNavbar from '../layouts/AdminNavbar';
import AdminFooter from '../layouts/AdminFooter';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <main className="flex-1 p-4">{children}</main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
