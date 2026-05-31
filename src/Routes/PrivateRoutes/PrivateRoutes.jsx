import React, { useContext } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../../Pages/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }
  return children;
};

export default PrivateRoutes;
