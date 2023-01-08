import { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/v1/users/login";
      const { data: response } = await axios.post(url, data);
      localStorage.setItem("token", response.data);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to your account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              required
              className={styles.input}
              onChange={handleChange}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              required
              className={styles.input}
              onChange={handleChange}
            ></input>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Submit
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
