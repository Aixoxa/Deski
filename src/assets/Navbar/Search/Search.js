import React from "react";
import styles from "../Search/Search.module.css";

function Search() {
  return (
    <div style={{margin: '0px 15px'}}>
      <form className={styles.search_container}>
        <input type="text" placeholder="Your work email" />
        <button>Try for free</button>
      </form>
    </div>
  );
}

export default Search;
