import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('loggedInUser'); // check login

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // redirect to login if not logged in
  }

  return children;
};

export default ProtectedRoute;
