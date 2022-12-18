import React from "react";
import styles from "./Navbtn.module.css";

function navBtn() {
  return (
    <div className={styles.navbtn_container}>
      <div id={styles.webapp_cover}>
        <div id={styles.menu_button}>
          <input type="checkbox" id={styles.menu_checkbox} />
          <label htmlFor={styles.menu_checkbox} id={styles.menu_label}>
            <div id={styles.menu_text_bar}></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default navBtn;
