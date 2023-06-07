import React from "react";
import { useSelector } from "react-redux";

const ArticleList = () => {
  const articles = useSelector((state) => state.articles.articles);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
