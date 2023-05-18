import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiAlertTriangle } from "react-icons/fi";
import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  return (
    <div className={styles.contentWrap}>
      <div className={styles.blocksWrap}>
        <div className={styles.roles}>
          <div className={`${styles.tab} ${styles.active}`}>
            <button className={styles.button}>
              <FaGraduationCap className={styles.icon} />
              <h2>Student</h2>
            </button>
          </div>
          <div className={styles.tab}>
            <button className={styles.button}>
              <FaChalkboardTeacher className={styles.icon} />
              <h2>Teacher</h2>
            </button>
          </div>
        </div>
        <div className={styles.topWrap}>
          <h1>Get started with Us</h1>
          <p>Register a new membership</p>
        </div>
        <div>
          <form>
            <div className={styles.formControl}>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className={styles.inputField}
              />
              {/* Add other form fields */}
            </div>
            <button className={styles.registerButton}>Register</button>
          </form>
        </div>
        <div className={styles.bottomWrap}>
          <p>Already have an account?</p>
          <Link className={styles.link} to="/login">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
