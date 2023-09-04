import React from "react";
import { Link } from "react-router-dom";
import styles from "./PopupMenu.module.scss";

const PopupMenu = ({ onClose }) => {
  return (
    <div className={styles.popupMenu}>
      <Link to="/app/add-article" onClick={onClose}>
        Add Article
      </Link>
      <Link to="/app/report" onClick={onClose}>
        Report
      </Link>
    </div>
  );
};

export default PopupMenu;
