import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.parent_footer_container}>
      <div className={styles.footer_container}>
        <div
          className={styles.footer_logo_container}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <img src="images/logos/deski_02.svg" alt="" />
        </div>
        <ul data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
          <li>Services</li>
          <li>Web Design</li>
          <li>Development</li>
          <li>Wordpress</li>
          <li>Online Marketing</li>
          <li>Content</li>
        </ul>
        <ul data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          <li>About us</li>
          <li>About us</li>
          <li>Work Portfolio</li>
          <li>Team</li>
          <li>Plan & Pricing</li>
          <li>News</li>
        </ul>
        <ul data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
          <li>Address</li>
          <li>companyinfo@gmail.com</li>
          <li>+761 412 3224</li>
        </ul>
      </div>
      <img
        src="images/illustrations/ils_01.svg"
        alt="illustration"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      />
      <div className={styles.privacy_container}>
        <p
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
          // data-aos-offset="0"
        >
          Copyright @2022 deski inc.
        </p>
        <ul
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="100"
          // data-aos-offset="0"
        >
          <li>Privacy</li>
          <li>Security</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
