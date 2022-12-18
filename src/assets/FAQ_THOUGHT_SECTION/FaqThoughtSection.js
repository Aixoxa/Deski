import React from "react";
import styles from "./FaqThoughtSection.module.css";
import { Accordion } from "react-bootstrap";

function FaqThoughtSection() {
  return (
    <div>
      <div className={styles.faq_container}>
        <div className={styles.faq_content}>
          <h6>Find your answers</h6>
          <h2>Have any thought? Look here.</h2>
          <button>Go to Faq</button>
        </div>

        <div className={styles.faq_menu}>
          <Accordion className={styles.faq_accordion} defaultActiveKey="1">
            <Accordion.Item className={styles.faq_accordion_item} eventKey="0">
              <Accordion.Header>
                How the affiliate programe works?
              </Accordion.Header>
              <Accordion.Body>
                mea case duis tollit et. Etiam nusquam set minium eu sea, ei
                tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos
                deserunt quaeren.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className={styles.faq_accordion_item} eventKey="1">
              <Accordion.Header>How to create customer panel?</Accordion.Header>
              <Accordion.Body>
                mea case duis tollit et. Etiam nusquam set minium eu sea, ei
                tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos
                deserunt quaeren.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className={styles.faq_accordion_item} eventKey="2">
              <Accordion.Header>How to delete my account?</Accordion.Header>
              <Accordion.Body>
                mea case duis tollit et. Etiam nusquam set minium eu sea, ei
                tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos
                deserunt quaeren.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className={styles.faq_accordion_item} eventKey="3">
              <Accordion.Header>
                Is ios app available for the iphone?
              </Accordion.Header>
              <Accordion.Body>
                mea case duis tollit et. Etiam nusquam set minium eu sea, ei
                tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos
                deserunt quaeren.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      ;
    </div>
  );
}

export default FaqThoughtSection;
