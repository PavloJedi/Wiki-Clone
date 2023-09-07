import React, { useState, useEffect, useRef } from "react";
import { updateArticle } from "../../../services/articlesService";
import { Editor, EditorState, ContentState } from "draft-js";
import styles from "../../../views/pages/ArticlePage/ArticlePage.module.scss";

const EditArticleForm = ({ idString, article, setEditing, setArticle }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(`${article.title}\n\n${article.content}`)
    )
  );

  const formRef = useRef();
  const initialContent = useRef(editorState.getCurrentContent().getPlainText());

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setEditing(false);
        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromText(initialContent.current)
          )
        );
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editorState, formRef, setEditing, setEditorState]);

  const handleSave = async () => {
    try {
      const rawContent = editorState.getCurrentContent().getPlainText();
      const [title, ...content] = rawContent.split("\n\n");
      const updatedArticle = {
        title: title.replace("Title: ", ""),
        content: content.join("\n\n"),
      };
      await updateArticle(idString, updatedArticle);
      setArticle(updatedArticle);
      setEditing(false);
    } catch (error) {
      console.error("Failed to update article:", error);
    }
  };

  return (
    <div className={styles.articleEdit} ref={formRef}>
      <Editor editorState={editorState} onChange={setEditorState} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditArticleForm;
