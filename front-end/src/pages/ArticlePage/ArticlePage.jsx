import React, { useEffect, useState } from "react";
import { getArticleById } from "../../services/articlesService";
import { useParams } from "react-router-dom";
import styles from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const { id: idString } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const fetchedArticle = await getArticleById(idString);
        setArticle(fetchedArticle);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch article:", error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [idString]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginBottom: "15px", backgroundColor: "red" }}>
      {article ? (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ) : (
        <div>Article not found</div>
      )}
    </div>
  );
};

export default ArticlePage;
