import React, { Suspense, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//private route
import PrivateRoute from "./PrivateRoute";

//context
import { CurrentUserContext } from "../context/AppProvider";

//pages
import HomePage from "../pages/HomePage/HomePage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
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
        <Route index path="/app" element={<HomePage />} />
        <Route
          path="/app/articles"
          element={
            <PrivateRoute>
              <ArticlePage />
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
