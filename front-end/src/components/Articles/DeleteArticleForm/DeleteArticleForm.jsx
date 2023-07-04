import React, { useState } from "react";
import Modal from "react-modal";
import { FaTrashAlt } from "react-icons/fa";
import { deleteArticle } from "../../../services/articlesService";
import styles from "./DeleteArticleForm.module.scss";

const DeleteArticleForm = ({ idString, setArticle }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteArticle(idString);
      setArticle(null);
      setModalIsOpen(false);
    } catch (error) {
      console.error("Failed to delete article:", error);
    }
  };

  return (
    <>
      <FaTrashAlt onClick={handleDelete} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={styles.customModalContent}
        overlayClassName={styles.customModalOverlay}
      >
        <h2 className={styles.modalTitle}>Confirm deletion</h2>
        <p className={styles.modalText}>
          Are you sure you want to delete this article?
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.confirmButton}
            onClick={handleConfirmDelete}
          >
            Yes
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setModalIsOpen(false)}
          >
            No
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteArticleForm;
