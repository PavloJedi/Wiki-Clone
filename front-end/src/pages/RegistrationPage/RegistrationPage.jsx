import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";

//styles
import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

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

      // Handle the response as needed
      console.log(response);

      // Redirect to another page after successful registration
      history.push("/login");
    } catch (error) {
      // Handle registration error
      console.log(error);
    }
  };

  return (
    <div className={styles.contentWrap}>
      <div className={styles.blocksWrap}>
        <form onSubmit={handleRegistration}>
          <div className={styles.formControl}>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className={styles.inputField}
              value={data.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.inputField}
              value={data.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.inputField}
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.registerButton}>
            Register
          </button>
        </form>
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
