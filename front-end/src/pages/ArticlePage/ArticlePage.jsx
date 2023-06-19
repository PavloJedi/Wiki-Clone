import React from "react";
import { useSelector } from "react-redux";
import styles from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const article = useSelector((state) => state.articles.articles);

  return (
    <div style={{ marginBottom: "15px" }}>
      <div key={article.id}>
        <h3>{article.title}</h3>
        <p>{article.text}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
