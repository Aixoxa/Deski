import React, { useState, useEffect } from "react";
import styles from "./Preloader.module.css";

function Preloader() {
  return (
    <div className={styles.preloader_container}>
      <div className={styles.loading_spinner}></div>
      <div className={styles.letters_container}>
        <span>D</span>
        <span>E</span>
        <span>S</span>
        <span>K</span>
        <span>I</span>
      </div>
    </div>
  );
}

export default Preloader;
