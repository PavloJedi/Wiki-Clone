import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";

// React-icons library
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

//styles
import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const user = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const response = await authService.registration(user);
      console.log(response);
      history.push("/login");
      setError("");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      } else {
        setError(error);
      }
    }
  };

  return (
    <div className={styles.contentWrap}>
      <div className={styles.blocksWrap}>
        <h2 className={styles.registerTitle}>Register on Wiki-Clone</h2>
        <form onSubmit={handleRegistration} style={{ width: "70%" }}>
          <div className={styles.formControl}>
            <div className={styles.inputField}>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className={styles.inputField}
                value={data.name}
                onChange={handleChange}
              />
              <FaUser className={styles.icon} />
            </div>
            <div className={styles.inputField}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.inputField}
                value={data.email}
                onChange={handleChange}
              />
              <FaEnvelope className={styles.icon} />
            </div>
            <div className={styles.inputField}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={styles.inputField}
                value={data.password}
                onChange={handleChange}
              />
              <FaLock className={styles.icon} />
            </div>
          </div>
          <button type="submit" className={styles.registerButton}>
            Register
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.bottomWrap}>
          <p>Already have an account?</p>
          <Link className={styles.link} to="/login">
            <button className={styles.loginButton}>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
