import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Private route
import PrivateRoute from "./PrivateRoute";

// Pages
import HomePage from "../pages/HomePage/HomePage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import ReportPage from "../pages/ReportPage/ReportPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFound from "../pages/NotFound/NotFoundPage";

// Components
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import AddArticleForm from "../components/Articles/AddArticleForm/AddArticleForm";
import EditArticleForm from "../components/Articles/EditArticleForm/EditArticleForm";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
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
