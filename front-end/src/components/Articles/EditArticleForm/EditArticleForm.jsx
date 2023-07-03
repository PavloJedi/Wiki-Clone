import React, { useState } from "react";
import { updateArticle } from "../../../services/articlesService";
import { Editor, EditorState, ContentState } from "draft-js";
import styles from "../../../pages/ArticlePage/ArticlePage.module.scss";

const EditArticleForm = ({ idString, article, setEditing, setArticle }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(`${article.title}\n\n${article.content}`)
    )
  );

  const handleSave = async () => {
    try {
      const rawContent = editorState.getCurrentContent().getPlainText();
      const [title, ...content] = rawContent.split("\n\n");
      const updatedArticle = {
        title: title.replace("Title: ", ""),
        content: content.join("\n\n"),
      };
      console.log("Updating article with id: ", idString);
      await updateArticle(idString, updatedArticle);
      setArticle(updatedArticle);
      setEditing(false);
    } catch (error) {
      console.error("Failed to update article:", error);
    }
  };

  return (
    <div className={styles.articleEdit}>
      <Editor editorState={editorState} onChange={setEditorState} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditArticleForm;
