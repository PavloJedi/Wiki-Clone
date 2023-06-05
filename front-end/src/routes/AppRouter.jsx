import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//pages
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFound from "../pages/NotFound/NotFoundPage";

//components
import Loader from "../components/Loader/Loader";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
