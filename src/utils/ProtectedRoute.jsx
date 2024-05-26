import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAdminLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      element={isAdminLoggedIn ? <Element /> : <Navigate to="/admin/login" />}
    />
  );
};

export default ProtectedRoute;
