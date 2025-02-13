import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes = ({children}) => {

  const {user, loading} = useContext(AuthContext)

  const location = useLocation()

  if(loading){
    return <span className="loading loading-bars loading-lg flex mx-auto"></span>
  }

  if(!user){
    return <Navigate  to="/login" state={location.pathname}></Navigate>
  }

  return children
  
};

export default PrivateRoutes;

// state={{from:location.pathname}}