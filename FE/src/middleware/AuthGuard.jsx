/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const AuthGuard = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node.isRequired,
    };


export default AuthGuard;
