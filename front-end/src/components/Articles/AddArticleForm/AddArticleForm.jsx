import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../../../redux/slices/articleSlice";
import { createArticle } from "../../../services/articlesService";

//styles
import styles from "./AddArticleForm.module.scss";

const AddArticleForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const article = await createArticle(title, text, currentUser.user._id);
      dispatch(addArticle(article));
      setTitle("");
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
      ></textarea>
      <button className={styles.button} type="submit">
        Add Article
      </button>
    </form>
  );
};

export default AddArticleForm;
