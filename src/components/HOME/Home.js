import React from "react";
import styles from "./Home.module.css";
import Search from "../../assets/Navbar/Search/Search";
import FaqThoughtSection from "../../assets/FAQ_THOUGHT_SECTION/FaqThoughtSection";
import TrialSection from "../../assets/TRIAL_SECTION/TrialSection";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Navbar from "../../assets/Navbar/Navbar"
import Footer from "../../assets/Footer/Footer";


function Home() {
  return (
    <div className={styles.main_container}>
      <Navbar />
      <div className={styles.header_content} style={{ textAlign: "center" }}>
        <h1>
          Get your work done with <span>deski</span>
        </h1>
        <p style={{ fontFamily: "Roboto" }}>
          The first project management platform that brings everything together
        </p>
        <div className="">
          <Search />
        </div>
      </div>

      <p
        style={{
          fontFamily: "Roboto",
          color: "#73737B",
          paddingTop: 18,
          marginBottom: 150,
          textAlign: "center",
        }}
      >
        Already using deski? <span style={{ color: "#6F55FF" }}>Sign in</span>.
      </p>

      <div
        className={styles.image_parent_container}
        style={{
          backgroundImage: `url(images/dot-bg.svg)`,
          backgroundPosition: "center 230px",
          paddingBottom: 200,
        }}
      >
        <div className={styles.image_content}>
          <img src="images/feature-img.png" alt="feature-content" />
          <img
            src="images/feature-img-01.png"
            alt="task-1"
            data-aos="fade-left"
            data-aos-duration="1200"
          />
          <img
            src="images/feature-img-04.png"
            alt="task-2"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          />
          <img
            src="images/feature-img-02.png"
            alt="task-3"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="150"
          />
          <img
            src="images/feature-img-03.png"
            alt="task-4"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
          />
          <img src="images/feature-img-10.png" alt="members" />
        </div>
      </div>

      <div className={styles.features_parent_container}>
        <div
          className={styles.features_container}
          style={{ marginTop: 50, marginBottom: 80 }}
        >
          <div className={styles.create_project_parent_container}>
            <div className={styles.create_project_container}>
              <div className={styles.create_project}>
                <img src="images/icons/01.svg" alt="" />
              </div>
              <h4>Create Project</h4>
            </div>

            <div className={styles.caption_container}>
              <span>
                Don't waste time on tedious manual tasks. Let Automation do it
                for you. Simplify workflows, reduce errors, and save time for
                solving more.
              </span>
            </div>
          </div>

          <div className={styles.make_plan_parent_container}>
            <div className={styles.make_plan_container}>
              <div className={styles.make_plan}>
                <img src="images/icons/02.svg" alt="" />
              </div>
              <h4>Making Plan</h4>
            </div>
            <div className={styles.caption_container}>
              <span>
                Now it's more easy to make plan. Let Automation do it for you.
                Simplify workflows, reduce errors, and save time for solving
                more.
              </span>
            </div>
          </div>

          <div className={styles.create_wireframe_parent_container}>
            <div className={styles.create_wireframe_container}>
              <div className={styles.create_wireframe}>
                <img src="images/icons/03.svg" alt="" />
              </div>
              <h4>Create Wireframe</h4>
            </div>

            <div className={styles.caption_container}>
              <span>
                You are one step ahead to create wireframe. Let Automation do it
                for you. Simplify workflows.
              </span>
            </div>
          </div>

          <div className={styles.final_output_parent_container}>
            <div className={styles.final_output_container}>
              <div className={styles.final_output}>
                <img src="images/icons/04.svg" alt="" />
              </div>
              <h4>Final Output</h4>
            </div>
            <div className={styles.caption_container}>
              <span>
                Checkout the final output. Let Automation do it for you.
                Simplify workflows, reduce errors, and save time for solving
                more
              </span>
            </div>
          </div>
        </div>
      </div>

      <h2
        className={styles.middle_header}
        style={{
          fontFamily: "gilroy-heavy",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Know everything about App features.
      </h2>

      {/* TEAM WORK SECTION */}

      <div className={styles.team_work_container}>
        <div
          className={styles.image_container}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className={styles.feature_img_container}>
            <img src="images/feature-img-05.png" alt="feature-img" />
            <div
              className={styles.progress_lineone}
              data-aos="fade-right"
              data-aos-duration="1200"
            ></div>
            <div
              className={styles.progress_linetwo}
              data-aos="fade-right"
              data-aos-duration="1200"
            ></div>
          </div>

          <img src="images/shapes/1.svg" alt="circle-shape" />
          <img src="images/shapes/2.svg" alt="dot-shape" />
        </div>

        <div
          className={styles.image_caption}
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <h6>FLEXIBILITY</h6>
          <h3>Get instant visibility into all your team work.</h3>
          <p>
            Don’t waste time on tedious manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time for solving
            more important problems.
          </p>
          <span>Learn about flexibility</span>
        </div>
      </div>

      {/* RESPONSE TIME SECTION */}

      <div className={styles.response_section}>
        <div className={styles.response_content} data-aos="fade-right">
          <h6>QUICK & FAST</h6>
          <h3>Fast App response time</h3>
          <p>
            deski is 5x as fast to load than other popular tools, quick to
            configure.
          </p>

          <div className={styles.quote}>
            <blockquote>
              “Our team really feel great to use the deski app specially their
              faster load & server speed”
            </blockquote>
          </div>

          <div className={styles.response_footer}>
            <img src="images/img_01.png" alt="" />
            <div className={styles.caption}>
              <h5>Micle Duke, Product Manager</h5>
              <span>Uber Inc.</span>
            </div>
          </div>
        </div>

        <div className={styles.response_image} data-aos="fade-left">
          <img src="images/feature-img-08.png" alt="img-01" />
          <img src="images/feature-img-07.png" alt="img-02" />
          <img src="images/shapes/3.svg" alt="circle-shape" />
          <img src="images/shapes/4.svg" alt="dot-shape" />
        </div>
      </div>

      {/* PROJECT SECTION STATUS */}

      <div className={styles.project_status_container}>
        <div className={styles.project_status_image}>
          <img src="images/feature-img-09.png" alt="" />
          <img src="images/feature-img-10.png" alt="" />
          <img src="images/shapes/5.svg" alt="circle-shape" />
          <img src="images/shapes/6.svg" alt="dot-shape" />
        </div>
        <div className={styles.project_status_content}>
          <h6>PROJECT STATUS</h6>
          <h3>Real time project status monitoring.</h3>
          <p>
            Don’t waste time on tedious manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time for solving
            more important problems.
          </p>
        </div>
      </div>

      {/* INTEGRATION TOOLS SECTION */}

      <div className={styles.integration_section_container}>
        <div className={styles.integration_section_content}>
          <h6>INTEGRATES WITH YOUR TOOLS</h6>
          <h2>
            Deski ties into your existing tools, services, &amp; workflow. Get
            notifications or create a Story with others tools.
          </h2>
        </div>
        <div className={styles.integration_image_container}>
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className={styles.img_container}>
              <Link to="">
                <img src="images/logos/PNT.png" alt="" />
              </Link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            <div className={styles.img_container}>
              <img
                src="images/logos/MSG.png"
                alt=""
                style={{ width: 54, height: 55 }}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div className={styles.img_container}>
              <img
                src="images/logos/SLK.png"
                alt=""
                style={{ width: 90, height: 87 }}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className={styles.img_container}>
              <img
                src="images/logos/ENV.png"
                alt=""
                style={{ width: 83, height: 83 }}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250">
            <div className={styles.img_container}>
              <img
                src="images/logos/DRB.png"
                alt=""
                style={{ width: 80, height: 80 }}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            <div className={styles.img_container}>
              <img
                src="images/logos/GDR.png"
                alt=""
                style={{ width: 60, height: 60 }}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <div className={styles.img_container}>
              <img
                src="images/logos/PYN.png"
                alt=""
                style={{ width: 130, height: 46 }}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div className={styles.img_container}>
              <img
                src="images/logos/ING.png"
                alt=""
                style={{ width: 60, height: 60 }}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className={styles.img_container}>
              <img
                src="images/logos/NET.png"
                alt=""
                style={{ width: 120, height: 67 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* COMMUNITY SECTION */}

      <div className={styles.community_section_container}>
        <div className={styles.community_content}>
          <h6>You’re in good company</h6>
          <h2>Join the community by using our apps to grow faster.</h2>

          <div className={styles.community_counter}>
            <div className="">
              <h2>
                <CountUp
                  start={1}
                  end={15}
                  startOnMount={true}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                k
              </h2>
              <span>Projects</span>
            </div>
            <div className="">
              <h2>
                <CountUp
                  start={1}
                  end={3}
                  startOnMount={true}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                k
              </h2>
              <span>Workers</span>
            </div>
            <div className="">
              <h2>
                <CountUp
                  start={1}
                  end={123}
                  startOnMount={true}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </h2>
              <span>Offices</span>
            </div>

            <img src="images/shapes/9.svg" alt="dot-shape" />
          </div>
        </div>

        <div className={styles.community_parent_card_container}>
          <div
            className={styles.community_card_container}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className={styles.card_content}>
              <img src="images/guy.png" alt="avatar" />
              <p>
                it’s a great exprience to work with deski. They’r vey humble and
                expert & the service has been excellent & super.
              </p>
              <h6>RENA SINGLETON</h6>
              <span>Former Assistant Jamuna Group.</span>
            </div>
          </div>

          <div
            className={styles.community_card_container}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className={styles.card_content}>
              <img src="images/girl.png" alt="avatar" />
              <p>
                it’s a great exprience to work with deski. They’r vey humble and
                expert & the service has been excellent & super.
              </p>
              <h6>RENA SINGLETON</h6>
              <span>Former Assistant Jamuna Group.</span>
            </div>
          </div>

          <div
            className={styles.community_card_container}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className={styles.card_content}>
              <img src="images/gran.png" alt="avatar" />
              <p>
                it’s a great exprience to work with deski. They’r vey humble and
                expert & the service has been excellent & super.
              </p>
              <h6>RENA SINGLETON</h6>
              <span>Former Assistant Jamuna Group.</span>
            </div>
          </div>

          <img src="images/shapes/9.svg" alt="dot-shape" />
        </div>
      </div>

      {/* TRIAL & FAQ SECTION */}
      <div>
        <TrialSection />
      </div>

      {/* 
      FAQ & THOUGHT SECTION */}

      <div className="">
        <FaqThoughtSection />
      </div>

      {/* HOME CONTACT US SECTION */}
      <div className={styles.parent_home_contact}>
        <div className={styles.home_contact_section}>
          <div className={styles.home_contact_content}>
            <h2>Don’t find the answer? contact us for any query.</h2>
          </div>
          <button>Contact us</button>
          <div className={styles.bubble_one}></div>
          <div className={styles.bubble_two}></div>
        </div>
        <img src="images/shapes/9.svg" alt="dot-shape" />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
