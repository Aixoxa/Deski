import React from "react";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#6f55ff" }}>
      <div className={styles.mainbox}>
        <div className={styles.err}>4</div>
        <i
          class="far fa-question-circle fa-spin"
          style={{
            position: "absolute",
            fontSize: "8.5rem",
            left: "42%",
            top: "15%",
            color: "#ffffff",
          }}
        ></i>
        <div className={styles.err2}>4</div>
        <div className={styles.msg}>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
