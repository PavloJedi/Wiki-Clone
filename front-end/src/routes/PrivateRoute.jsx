import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

// Context
import { CurrentUserContext } from "../context/AppProvider";

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useContext(CurrentUserContext);

  if (isLoading) {
    return null;  // return null while checking the auth status
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRoute;
