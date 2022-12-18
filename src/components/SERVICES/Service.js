import React from "react";
import styles from "./Service.module.css";
import CountUp from "react-countup";
import Navbar from "../../assets/Navbar/Navbar"
import Footer from "../../assets/Footer/Footer";


function Service() {
  return (
    <div>
      <Navbar />
      <div className={styles.service_header}>
        <h2>Our Services</h2>
        <h6>
          We are a creative company that focuses on establishing long-term
          relationships with customers.
        </h6>
      </div>

      <div className="" style={{ backgroundColor: "#f2fbfd" }}>
        <div className={styles.services_container}>
          <h2 data-aos="fade-up" data-aos-duration="1200">
            Explore our service.
          </h2>

          <div
            className={styles.mobile_app}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className={styles.mobile_content}>
              <div className={styles.image_container}>
                <img src="images/icons/181.svg" alt="" />
              </div>

              <h2>Mobile App</h2>
              <p>Duis aute irure dolor reprehen derit in voluptat velit.</p>
            </div>
          </div>

          <div
            className={styles.figma_design}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className={styles.figma_content}>
              <div className={styles.image_container}>
                <img src="images/icons/183.svg" alt="" />
              </div>

              <h2>Figma Design</h2>
              <p>Duis aute irure dolor reprehen derit in voluptat velit.</p>
            </div>
          </div>
          <div
            className={styles.wp_dev}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className={styles.wp_content}>
              <div className={styles.image_container}>
                <img src="images/icons/132.svg" alt="" />
              </div>
              <h2>Wp Development</h2>
              <p>Duis aute irure dolor reprehen derit in voluptat velit.</p>
            </div>
          </div>

          <div
            className={styles.customize}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className={styles.customize_content}>
              <div className={styles.image_container}>
                <img src="images/icons/133.svg" alt="" />
              </div>
              <h2>Easily Customizable</h2>
              <p>Duis aute irure dolor reprehen derit in voluptat velit.</p>
            </div>
          </div>

          <div
            className={styles.marketing}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className={styles.marketing_content}>
              <div className={styles.image_container}>
                <img src="images/icons/184.svg" alt="" />
              </div>
              <h2>Marketing</h2>
              <p>Duis aute irure dolor reprehen derit in voluptat velit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.service_mid_section}>
        <div
          className={styles.service_image_container}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img src="images/smiling-guy.png" alt="" />
        </div>

        <div
          className={styles.service_content_container}
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img src="images/icons/185.png" alt="" />

          <h6>
            Deski combines excellent live chat, ticketing and automation that
            allow us to provide quality.
          </h6>
          <div className={styles.service_caption}>
            <span>Mike Lucas.</span>
            <span>CEO & Founder deksi</span>
          </div>
        </div>
      </div>

      <div className={styles.service_counter_container}>
        <div>
          <h2>
            <CountUp
              start={1}
              end={13}
              startOnMount={true}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            <span>k</span>
          </h2>
          <p>Job done successfully</p>
        </div>
        <div>
          <h2>
            <CountUp
              start={1}
              end={20}
              startOnMount={true}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            <span>million</span>
          </h2>
          <p>3280 avg rating</p>
        </div>
        <div>
          <h2>
            <CountUp
              start={1}
              end={3000}
              startOnMount={true}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            <span>+</span>
          </h2>
          <p>using Deski</p>
        </div>
      </div>

      <div className={styles.service_project_container}>
        <div>
          <h2>Convinced to work on a new project?</h2>
          <button
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            Contact us
          </button>
        </div>
        <img src="images/shapes/211.svg" alt="left-shape" />
        <img src="images/shapes/210.svg" alt="right-shape" />
      </div>
      <Footer />
    </div>
  );
}

export default Service;
