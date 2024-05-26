import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const adminLogin = (username, password) => {
    // Perform basic validation (replace this with your own logic)
    if (username === 'admin' && password === 'password') {
      setIsAdminLoggedIn(true);
    } else {
      setIsAdminLoggedIn(false);
    }
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, adminLogin, adminLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
