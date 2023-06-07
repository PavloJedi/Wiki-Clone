import React, { Suspense, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Private route
import PrivateRoute from "./PrivateRoute";

//Context
import { CurrentUserContext } from "../context/AppProvider";

//pages
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFound from "../pages/NotFound/NotFoundPage";

//components
import Loader from "../components/Loader/Loader";

const AppRouter = () => {
  const { isAuthenticated } = useContext(CurrentUserContext);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          index
          element={isAuthenticated ? <Navigate to="/app" /> : <HomePage />}
        />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
