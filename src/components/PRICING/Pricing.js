import React, { useState } from "react";
import styles from "./Pricing.module.css";
import FaqThoughtSection from "../../assets/FAQ_THOUGHT_SECTION/FaqThoughtSection";
import TrialSection from "../../assets/TRIAL_SECTION/TrialSection";
import Navbar from "../../assets/Navbar/Navbar";
import Footer from "../../assets/Footer/Footer";
import CountUp from "react-countup";

function Pricing() {
  const [monthPlan, setMonthPlan] = useState(true);

  function monthlyPlanHandler() {
    setMonthPlan(true);
  }

  function yearlyPlanHandler() {
    setMonthPlan(false);
  }
  return (
    <div>
      <Navbar />
      <div className={styles.pricing_header}>
        <div className="">
          <h2>Choose package match your budget</h2>
          <h6>
            5 minute installation · Try Team plan features for 14 days · No
            credit card required
          </h6>
        </div>

        <div className={styles.pricing_button}>
          <div className={styles.button_container}>
            {monthPlan ? (
              <button
                onClick={monthlyPlanHandler}
                style={{ color: "white", backgroundColor: "#6f55ff" }}
              >
                Monthly
              </button>
            ) : (
              <button
                onClick={monthlyPlanHandler}
                style={{ color: "#6f55ff", backgroundColor: "white" }}
              >
                Monthly
              </button>
            )}

            {!monthPlan ? (
              <button
                onClick={yearlyPlanHandler}
                style={{ color: "white", backgroundColor: "#6f55ff" }}
              >
                Yearly
              </button>
            ) : (
              <button onClick={yearlyPlanHandler}>Yearly</button>
            )}

            <p>Save 30% on annual plan</p>
          </div>
        </div>
      </div>

      <div className={styles.pricing_card_container}>
        <div className={styles.first_card}>
          <div className="">
            <h5>STARTER</h5>
            {monthPlan ? (
              <h3>
                $18.<sup>99</sup>
              </h3>
            ) : (
              <h3>
                $8.<sup>99</sup>
              </h3>
            )}

            <h6>Small Office / Home Office</h6>

            <img src="../images/icons/38.svg" alt="" />
            <p>Billed per agent</p>

            <ul>
              <li>60-day chat history</li>
              <li>Basic widget customization</li>
              <li>Ticketing system</li>
              <li>Data security</li>
            </ul>

            <button>Choose Plan</button>
            <span>Get your 30 day free trial</span>
          </div>
        </div>

        <div className="">
          <div className="">
            <h5>TEAM</h5>
            {monthPlan ? (
              <h3>
                $29.<sup>99</sup>
              </h3>
            ) : (
              <h3>
                $19.<sup>99</sup>
              </h3>
            )}
            <h6>Small Office / Home Office</h6>

            <img src="../images/icons/38.svg" alt="" />
            <p>Billed per agent</p>

            <ul>
              <li>60-day chat history</li>
              <li>Basic widget customization</li>
              <li>Ticketing system</li>
              <li>Data security</li>
            </ul>

            <button>Choose Plan</button>
            <span>Get your 30 day free trial</span>
          </div>
        </div>

        <div className="">
          <div className="">
            <h5>BUSINESS</h5>
            {monthPlan ? (
              <h3>
                $50.<sup>99</sup>
              </h3>
            ) : (
              <h3>
                $35.<sup>99</sup>
              </h3>
            )}
            <h6>Small Office / Home Office</h6>

            <img src="../images/icons/38.svg" alt="" />
            <p>Billed per agent</p>

            <ul>
              <li>60-day chat history</li>
              <li>Basic widget customization</li>
              <li>Ticketing system</li>
              <li>Data security</li>
            </ul>

            <button>Choose Plan</button>
            <span>Get your 30 day free trial</span>
          </div>
        </div>
      </div>

      <div className="">
        <div className={styles.pricing_review_container}>
          <div className="">
            <div className="">
              <h2>
                <CountUp
                  start={1}
                  end={4.3}
                  startOnMount={true}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </h2>
              <p>Positive review and counting</p>
            </div>
          </div>

          <div className="">
            <div className="">
              <h2>
                <CountUp
                  start={1}
                  end={29}
                  startOnMount={true}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                k
              </h2>
              <p>Subscriber trust on our services</p>
            </div>
          </div>

          <div className="">
            <div className="">
              <h2>
                <CountUp
                  start={1}
                  end={73}
                  startOnMount={true}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                k+
              </h2>
              <p>Order complete successfully</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonial_parent_container}>
        <div className={styles.testimonial_container}>
          <div
            className={styles.testimonial_image}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src="../images/img_40.png" alt="" />
          </div>

          <div
            className={styles.testimonial_content}
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img src="../images/icons/185.png" alt="" />
            <h5>
              More Over <span>1500+ customers</span>
            </h5>
            <p>
              Just simply amazing. Feel lucky use their service. Highly
              recommended and appreciate their service & highly trusted.
            </p>

            <h6>
              Jimmy Klein. <span>California USA</span>
            </h6>
          </div>
        </div>
        <div className={styles.custom_pricing_container}>
          <h3 data-aos="fade-right" data-aos-duration="1200">
            Want a custom pricing for your business? Send us mail
          </h3>
          <button data-aos="fade-left" data-aos-duration="1200">
            Contact us
          </button>
        </div>
      </div>

      <div className="">
        <FaqThoughtSection />
      </div>

      <div className="">
        <TrialSection />
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
