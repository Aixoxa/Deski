import React from "react";
import styles from "./TeamMembers.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../../assets/Navbar/Navbar"
import Footer from "../../../assets/Footer/Footer";

function Team() {
  return (
    <>
    <Navbar />
      <div className={styles.team_header}>
        <h2>We’ve Most Talented Team Members</h2>
        <p>
          With deski, get all kind of business solution to start your journey
        </p>
        <button>CONTACT US</button>
      </div>
      <div className={styles.team_card_container}>
        <div className={styles.team_card_content}>
          <div
            className={styles.team_card}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link
              to="/team-member/1"
              state={{
                name: "George Cortez",
                role: "UI Designer",
                pic: "guy.png",
              }}
            >
              <div className={styles.team_card_header}>
                <h6>UI Designer</h6>
                <h2>George Cortez</h2>
              </div>

              <img src="images/guy.png" alt="card-pic" />
            </Link>
          </div>

          <div
            className={styles.team_card}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link
              to="/team-member/2"
              state={{
                name: "Florence Roberts",
                role: "Product Manager",
                pic: "girl.png",
              }}
            >
              <div className={styles.team_card_header}>
                <h6>Product Manager</h6>
                <h2>Florence Roberts</h2>
              </div>

              <img src="images/girl.png" alt="card-pic" />
            </Link>
          </div>

          <div
            className={styles.team_card}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Link to="/team-member/3" state={{name:'Marc McCormick', role:'Marketing Crew', pic:'man.png'}}>
              <div className={styles.team_card_header}>
                <h6>Marketing Crew</h6>
                <h2>Marc McCormick</h2>
              </div>

              <img src="images/man.png" alt="card-pic" />
            </Link>
          </div>

          <div
            className={styles.team_card}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to="/team-member/4" state={{name:'George Cortez', role:'Developer', pic:'guyman.png'}}>
              <div className={styles.team_card_header}>
                <h6>Developer</h6>
                <h2>George Cortez</h2>
              </div>

              <img src="images/guyman.png" alt="card-pic" />
            </Link>
          </div>

          <div
            className={styles.team_card}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/team-member/5" state={{name:'Florence Roberts', role:'Product Manager', pic:'reg.png'}}>
              <div className={styles.team_card_header}>
                <h6>Product Manager</h6>
                <h2>Florence Roberts</h2>
              </div>

              <img src="images/reg.png" alt="card-pic" />
            </Link>
          </div>

          <div
            className={styles.team_card}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Link to="/team-member/6" state={{name:'James Maslow', role:'Marketing Crew', pic:'gran.png'}}>
              <div className={styles.team_card_header}>
                <h6>Marketing Crew</h6>
                <h2>James Maslow</h2>
              </div>

              <img src="images/gran.png" alt="card-pic" />
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 15px" }}>
        <div className={styles.team_contact_container}>
          <h2 data-aos="fade-up" data-aos-duration="1200">
            Want to be a part of our talented team?
          </h2>
          <button
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            SEND YOUR CV
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Team;
