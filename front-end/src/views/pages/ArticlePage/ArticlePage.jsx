import React, { useEffect, useState, useContext } from "react";
import { getArticleById } from "../../../services/articlesService";
import { useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import styles from "./ArticlePage.module.scss";
import { useSelector } from "react-redux";
import EditArticleForm from "../../../components/Articles/EditArticleForm/EditArticleForm";
import DeleteArticleForm from "../../../components/Articles/DeleteArticleForm/DeleteArticleForm";

const ArticlePage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { id: idString } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

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

  const handleEdit = () => {
    setEditing(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.articleBox}>
      {article ? (
        <>
          <div className={styles.icons}>
            {isAuthenticated && (
              <>
                <FaEdit onClick={handleEdit} />
                <DeleteArticleForm
                  idString={idString}
                  setArticle={setArticle}
                />
              </>
            )}
          </div>
          {editing ? (
            <EditArticleForm
              idString={idString}
              article={article}
              setEditing={setEditing}
              setArticle={setArticle}
            />
          ) : (
            <div key={article.id} className={styles.articleWrap}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center" }}>Article not found</div>
      )}
    </div>
  );
};

export default ArticlePage;
