import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

// Private route
import PrivateRoute from "./PrivateRoute";

// Pages
import HomePage from "../views/pages/HomePage/HomePage";
import ArticlePage from "../views/pages/ArticlePage/ArticlePage";
import ReportPage from "../views/pages/ReportPage/ReportPage";
import RegistrationPage from "../views/pages/RegistrationPage/RegistrationPage";
import LoginPage from "../views/pages/LoginPage/LoginPage";
import NotFound from "../views/pages/NotFound/NotFoundPage";

// Components
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import AddArticleForm from "../components/Articles/AddArticleForm/AddArticleForm";
import EditArticleForm from "../components/Articles/EditArticleForm/EditArticleForm";

const AppRouter = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); 
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          index
          element={
            isAuthenticated ? (
              <Navigate to="/app" />
            ) : (
              <Navigate to="registration" />
            )
          }
        />
        <Route path="/app" element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="add-article" element={<AddArticleForm />} />
            <Route path="article/:id" element={<ArticlePage />} />
            <Route path="article/:id/edit" element={<EditArticleForm />} />
            <Route path="report" element={<ReportPage />} />
          </Route>
        </Route>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
