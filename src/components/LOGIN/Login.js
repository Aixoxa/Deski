import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../assets/Navbar/Navbar";


function Login() {
  const passwordDisplay = () => {
    const passwordElement = document.querySelector(".password_element");
    const rootElement = document.querySelector(":root").style;

    return passwordElement.type === "password"
      ? ((passwordElement.type = "text"),
        rootElement.setProperty("--visibility", 0))
      : ((passwordElement.type = "password"),
        rootElement.setProperty("--visibility", 1));
  };

  return (
    <div>
      <Navbar />
      <div className={styles.login_container}>
        <div className={styles.login_content}>
          <h3>
            Want your best managment
            <br />
            software? sign up
          </h3>
          <div className={styles.illustration_holder}>
            <img
              src="../images/illustrations/ils_08.svg"
              alt="background-illus"
            />
            <img src="../images/illustrations/ils_08.1.svg" alt="first-illus" />
            <img
              src="../images/illustrations/ils_08.2.svg"
              alt="second-illus"
            />
          </div>
        </div>

        <div className={styles.login_form}>
          <div className={styles.login_header}>
            <img src="../images/logos/deski_01.svg" alt="" />
            <h6>
              <Link to="/">Go to home</Link>
            </h6>
          </div>

          <form>
            <h2>Hi buddy, welcome Back!</h2>
            <p>
              Still don't have an account?{" "}
              <span>
                <Link to="/signup">SignUp</Link>
              </span>
            </p>
            <div className={styles.input_container}>
              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="rayaisosa@gmail.com"
                />
              </div>
            </div>
            <div className={styles.input_container}>
              <div className="">
                <label htmlFor="paswd">Password</label>
                <input
                  type="password"
                  id="paswd"
                  className="password_element"
                  placeholder="Enter Password"
                />
                <span
                  className={styles.placeholder_icon}
                  onClick={passwordDisplay}
                >
                  <span>
                    <img src="../images/icons/view.svg" alt="eye-icon" />
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.checkbox_container}>
              <input type="checkbox" id="check_box" />
              <label htmlFor="check_box">Keep me logged in</label>

              <span>Forgot Password</span>
            </div>

            <div className="submit_button">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
