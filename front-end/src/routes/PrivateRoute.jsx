import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

// Context
import { CurrentUserContext } from "../context/AppProvider";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(CurrentUserContext);

  if (!isLoading) {
    return isAuthenticated ? (
      children || <Outlet />
    ) : (
      <Navigate to={"/login"} />
    );
  }
};

export default PrivateRoute;
