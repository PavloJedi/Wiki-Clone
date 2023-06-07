import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticle } from "../../../reducers/articleReducer";

const AddArticleForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle({ title, text }));
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
      ></textarea>
      <button type="submit">Add Article</button>
    </form>
  );
};

export default AddArticleForm;
