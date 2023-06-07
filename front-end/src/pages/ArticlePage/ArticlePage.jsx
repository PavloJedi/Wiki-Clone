import React from "react";
import ArticleList from "../../components/Articles/ArticleList/ArticleList";
import AddArticleForm from "../../components/Articles/AddArticleForm/AddArticleForm";

const ArticlePage = () => {
  return (
    <div>
      <h2>Articles</h2>
      <ArticleList />
      <h2>Add New Article</h2>
      <AddArticleForm />
    </div>
  );
};

export default ArticlePage;
