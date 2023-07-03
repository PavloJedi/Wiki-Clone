import React, { useState } from "react";
import Modal from "react-modal";
import { FaTrashAlt } from "react-icons/fa";
import { deleteArticle } from "../../../services/articlesService";

const DeleteArticleForm = ({ idString, setArticle }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteArticle(idString);
      setArticle(null); // Or update the articles list in some other way
      setModalIsOpen(false);
    } catch (error) {
      console.error("Failed to delete article:", error);
    }
  };

  return (
    <>
      <FaTrashAlt onClick={handleDelete} />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Confirm deletion</h2>
        <p>Are you sure you want to delete this article?</p>
        <button onClick={handleConfirmDelete}>Yes</button>
        <button onClick={() => setModalIsOpen(false)}>No</button>
      </Modal>
    </>
  );
};

export default DeleteArticleForm;
