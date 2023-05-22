import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";

//styles
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = {
        email: data.email,
        password: data.password,
      };
      const response = await authService.login(user);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.blocksWrap}>
        <div className={styles.topWrap}>
          <h1>Let's Get Started</h1>
          <p>Sign in to Wiki-Clone</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className={styles.formControl}>
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
          <button type="submit" className={styles.loginButton}>
            Sign in
          </button>
        </form>
        <div className={styles.bottomWrap}>
          <p>Don't have an account?</p>
          <Link className={styles.link} to="/">
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
