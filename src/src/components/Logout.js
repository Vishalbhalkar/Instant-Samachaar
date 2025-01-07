// Logout.js
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token") ;
    navigate('/');
  }, [navigate]);

  return null;
};

export default Logout;
