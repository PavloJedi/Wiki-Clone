import React, { useEffect, useState } from "react";
import {
  getArticleById,
  deleteArticle,
  updateArticle,
} from "../../services/articlesService";
import { useParams } from "react-router-dom";

//styles
import { FaEdit, FaTrashAlt } from "react-icons/fa";
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

  const handleEdit = () => {
    // navigate(`/edit-article/${article.id}`);
  };

  const handleDelete = async () => {
    try {
      await deleteArticle(article.id);
      // navigate("/articles"); // Or any other page you'd like to navigate to
    } catch (error) {
      console.error("Failed to delete article:", error);
    }
  };

  return (
    <div className={styles.articleBox}>
      {article ? (
        <>
          <div className={styles.icons}>
            <FaEdit onClick={handleEdit} />
            <FaTrashAlt onClick={handleDelete} />
          </div>
          <div key={article.id} className={styles.articleWrap}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        </>
      ) : (
        <div>Article not found</div>
      )}
    </div>
  );
};

export default ArticlePage;
