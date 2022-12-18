import React, { useState } from "react";
import styles from "./Terms.module.css";
import Navbar from "../../assets/Navbar/Navbar";
import Footer from "../../assets/Footer/Footer";
import { Fade } from "react-reveal";

function Terms() {
  const [toggle, setToggle] = useState(1);

  const toggleHandler = (index) => {
    setToggle(index);
  };

  return (
    <>
      <Navbar />
      <div className={styles.terms_container}>
        <div className={styles.tabs_container}>
          <ul>
            <li
              className={toggle === 1 && "text-dark"}
              onClick={() => toggleHandler(1)}
            >
              1. Website terms of use
            </li>
            <li
              className={toggle === 2 && "text-dark"}
              onClick={() => toggleHandler(2)}
            >
              2. Terms and conditions
            </li>
            <li
              className={toggle === 3 && "text-dark"}
              onClick={() => toggleHandler(3)}
            >
              3. Privacy policy
            </li>
            <li
              className={toggle === 4 && "text-dark"}
              onClick={() => toggleHandler(4)}
            >
              4. Cookie policy
            </li>
            <li
              className={toggle === 5 && "text-dark"}
              onClick={() => toggleHandler(5)}
            >
              5. Third Party Links
            </li>
          </ul>
        </div>

        <div className={styles.terms_content}>
          {toggle === 1 && (
            <Fade right>
              <div className="">
                <h2>Website Terms & Use</h2>
                <h6>LAST UPDATED: 6/26/2020</h6>
                <div>
                  <h3>1. Introduction</h3>
                  <p>
                    We have taken a number of steps to comply with the GDPR. For
                    more details about our compliance and how we handle your
                    data please check our latest legal documents below:
                  </p>

                  <ul>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                  </ul>
                </div>
                <div>
                  <h3>2. About us</h3>
                  <p>
                    When you use Ticket Tailor for selling tickets and
                    collecting data from your attendees you are the “data
                    controller” of all your attendees’ data. We are a “data
                    processor”, which means that we won’t do anything with your
                    attendees’ data other than what you need us to in order to
                    provide our service. We won’t be sending your attendees any
                    marketing emails, sharing their data with anyone and if you
                    want us to delete the data, just ask. It’s your data. 100
                  </p>
                </div>
                <div>
                  <h3>3. Accessing our Website</h3>
                  <p>
                    The servers and databases that power Ticket Tailor are
                    located in the EU in Ireland. We inevitably use a small
                    number of third parties, some of which are outside of the
                    EU, to provide our ticketing service and we have contracts
                    with each of them that oblige them to comply with the GDPR.
                    You can find the full list of these third parties and what
                    we use them for here.
                  </p>
                </div>
              </div>
            </Fade>
          )}

          {toggle === 2 && (
            <Fade right>
              <div>
                <h2>Terms & Conditions</h2>
                <h6>LAST UPDATED: 6/26/2020</h6>
                <div>
                  <h3>1. Introduction</h3>
                  <p>
                    We have taken a number of steps to comply with the GDPR. For
                    more details about our compliance and how we handle your
                    data please check our latest legal documents below:
                  </p>

                  <ul>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                  </ul>
                </div>
                <div>
                  <h3>2. About us</h3>
                  <p>
                    When you use Ticket Tailor for selling tickets and
                    collecting data from your attendees you are the “data
                    controller” of all your attendees’ data. We are a “data
                    processor”, which means that we won’t do anything with your
                    attendees’ data other than what you need us to in order to
                    provide our service. We won’t be sending your attendees any
                    marketing emails, sharing their data with anyone and if you
                    want us to delete the data, just ask. It’s your data. 100
                  </p>
                </div>
                <div>
                  <h3>3. Accessing our Website</h3>
                  <p>
                    The servers and databases that power Ticket Tailor are
                    located in the EU in Ireland. We inevitably use a small
                    number of third parties, some of which are outside of the
                    EU, to provide our ticketing service and we have contracts
                    with each of them that oblige them to comply with the GDPR.
                    You can find the full list of these third parties and what
                    we use them for here.
                  </p>
                </div>
              </div>
            </Fade>
          )}

          {toggle === 3 && (
            <Fade right>
              <div>
                <h2>Privacy policy</h2>
                <h6>LAST UPDATED: 6/26/2020</h6>
                <div>
                  <h3>1. Introduction</h3>
                  <p>
                    We have taken a number of steps to comply with the GDPR. For
                    more details about our compliance and how we handle your
                    data please check our latest legal documents below:
                  </p>

                  <ul>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                  </ul>
                </div>
                <div>
                  <h3>2. About us</h3>
                  <p>
                    When you use Ticket Tailor for selling tickets and
                    collecting data from your attendees you are the “data
                    controller” of all your attendees’ data. We are a “data
                    processor”, which means that we won’t do anything with your
                    attendees’ data other than what you need us to in order to
                    provide our service. We won’t be sending your attendees any
                    marketing emails, sharing their data with anyone and if you
                    want us to delete the data, just ask. It’s your data. 100
                  </p>
                </div>
                <div>
                  <h3>3. Accessing our Website</h3>
                  <p>
                    The servers and databases that power Ticket Tailor are
                    located in the EU in Ireland. We inevitably use a small
                    number of third parties, some of which are outside of the
                    EU, to provide our ticketing service and we have contracts
                    with each of them that oblige them to comply with the GDPR.
                    You can find the full list of these third parties and what
                    we use them for here.
                  </p>
                </div>
              </div>
            </Fade>
          )}

          {toggle === 4 && (
            <Fade right>
              <div>
                <h2>Cookie policy</h2>
                <h6>LAST UPDATED: 6/26/2020</h6>
                <div>
                  <h3>1. Introduction</h3>
                  <p>
                    We have taken a number of steps to comply with the GDPR. For
                    more details about our compliance and how we handle your
                    data please check our latest legal documents below:
                  </p>

                  <ul>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                  </ul>
                </div>
                <div>
                  <h3>2. About us</h3>
                  <p>
                    When you use Ticket Tailor for selling tickets and
                    collecting data from your attendees you are the “data
                    controller” of all your attendees’ data. We are a “data
                    processor”, which means that we won’t do anything with your
                    attendees’ data other than what you need us to in order to
                    provide our service. We won’t be sending your attendees any
                    marketing emails, sharing their data with anyone and if you
                    want us to delete the data, just ask. It’s your data. 100
                  </p>
                </div>
                <div>
                  <h3>3. Accessing our Website</h3>
                  <p>
                    The servers and databases that power Ticket Tailor are
                    located in the EU in Ireland. We inevitably use a small
                    number of third parties, some of which are outside of the
                    EU, to provide our ticketing service and we have contracts
                    with each of them that oblige them to comply with the GDPR.
                    You can find the full list of these third parties and what
                    we use them for here.
                  </p>
                </div>
              </div>
            </Fade>
          )}

          {toggle === 5 && (
            <Fade right>
              <div>
                <h2>Third Party Links</h2>
                <h6>LAST UPDATED: 6/26/2020</h6>
                <div>
                  <h3>1. Introduction</h3>
                  <p>
                    We have taken a number of steps to comply with the GDPR. For
                    more details about our compliance and how we handle your
                    data please check our latest legal documents below:
                  </p>

                  <ul>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                  </ul>
                </div>
                <div>
                  <h3>2. About us</h3>
                  <p>
                    When you use Ticket Tailor for selling tickets and
                    collecting data from your attendees you are the “data
                    controller” of all your attendees’ data. We are a “data
                    processor”, which means that we won’t do anything with your
                    attendees’ data other than what you need us to in order to
                    provide our service. We won’t be sending your attendees any
                    marketing emails, sharing their data with anyone and if you
                    want us to delete the data, just ask. It’s your data. 100
                  </p>
                </div>
                <div>
                  <h3>3. Accessing our Website</h3>
                  <p>
                    The servers and databases that power Ticket Tailor are
                    located in the EU in Ireland. We inevitably use a small
                    number of third parties, some of which are outside of the
                    EU, to provide our ticketing service and we have contracts
                    with each of them that oblige them to comply with the GDPR.
                    You can find the full list of these third parties and what
                    we use them for here.
                  </p>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
