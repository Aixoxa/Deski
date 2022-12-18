import React from "react";
import styles from "./MemberProfile.module.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../../assets/Navbar/Navbar"
import Footer from "../../../assets/Footer/Footer";

function MemberProfile() {
  const location = useLocation();

  const { name, role, pic } = location.state;
  return (
    <div>
      <Navbar />
      <h2 className={styles.header_title}>Single Profile</h2>

      <div
        className=""
        style={{
          backgroundColor: "#f2fbfd",
          padding: "160px 0",
          position: "relative",
        }}
      >
        {/* <div className={styles.dot_image}>
          <img src="../images/shapes/214.svg" alt="" />
        </div> */}

        <div className={styles.profile_container}>
          <div className={styles.profile_image}>
            <img src={`../images/${pic}`} alt="" />
          </div>
          <div className={styles.profile_content}>
            <div className={styles.member_name}>
              <h4 onClick={() => console.log(location)}>{name}</h4>
              <span>{role}</span>
            </div>
            <div className={styles.member_about}>
              <h6>ABOUT ME</h6>
              <span>
                Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dole magna aliqua. Ut enim
              </span>
            </div>
            <div className={styles.member_experties}>
              <h6>EXPERTIES</h6>
              <span>
                Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
                tempor incididunt
              </span>
            </div>
            <div className={styles.member_contact}>
              <h6>FOLLOW & CONTACT</h6>
              <ul>
                <li>
                  <i class="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i class="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i class="fa-brands fa-dribbble"></i>
                </li>
                <li>
                  <i class="fa-regular fa-envelope"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MemberProfile;
