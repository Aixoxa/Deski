import React from "react";
import styles from "./About.module.css";
import Navbar from "../../assets/Navbar/Navbar"
import Footer from "../../assets/Footer/Footer";

function About() {
  return (
    <>
    <Navbar />
      <div className={styles.about_container}>
        <h2>We're built for software management.</h2>
        <p>
          Our mission is to ensure software development teams can do their best
          work. So we created Clubhouse to provide the most intuitive and
          enjoyable project management platform teams actually want to use from
          project planning to product creation.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
