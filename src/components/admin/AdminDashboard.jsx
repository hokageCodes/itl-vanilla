import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { adminLogout } = useAuth();

  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <button onClick={adminLogout}>Logout</button>
      {/* Add your admin dashboard content here */}
    </div>
  );
};

export default AdminDashboard;
