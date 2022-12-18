import React from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../assets/Navbar/Navbar";


function SignUp() {
  const passwordDisplay = () => {
    const passwordElement = document.querySelectorAll(".password_element");
    const rootElement = document.querySelector(":root").style;
    passwordElement.forEach((e) => {
      return e.type === "password"
        ? ((e.type = "text"), rootElement.setProperty("--visibility", 0))
        : ((e.type = "password"), rootElement.setProperty("--visibility", 1));
    });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.signup_container}>
        <div className={styles.signup_content}>
          <h3>
            We have a “strategic” plan its
            <br />
            called doing things.
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

        <div className={styles.signup_form}>
          <div className={styles.signup_header}>
            <img src="../images/logos/deski_01.svg" alt="" />
            <h6>
              <Link to="/">Go to home</Link>
            </h6>
          </div>

          <form>
            <h2>Join with thousands of startup!</h2>
            <p>
              Already have an account?
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
            <div className={styles.input_container}>
              <div className="">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Ray Aixoxa" />
              </div>
            </div>
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
            <div className={styles.input_container}>
              <div className="">
                <label htmlFor="paswd-retype">Retype-Password</label>
                <input
                  type="password"
                  id="paswd-retype"
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
              <label htmlFor="check_box">
                By clicking "SIGN UP" I agree to the Terms and Conditions and
                Privacy Policy.
              </label>
            </div>

            <div className="pt-2">
              <button>Sign Up</button>
            </div>
          </form>
          <p className="text-center">© Copyright 2021 deski</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
