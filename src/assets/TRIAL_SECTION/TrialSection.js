import React from 'react';
import styles from "./TrialSection.module.css";

function TrialSection() {
  return (
    <div>
        <div className={styles.trial_parent_container}>
        <img src="images/shapes/9.svg" alt="dot-shape" />
        <div className={styles.trial_container}>
          <div className={styles.trial_content}>
            <h6>Start your free trial.</h6>
            <h2>New here? Start your free trial now.</h2>
          </div>

          <div className={styles.trial_form}>
            <form>
              <input type="text" placeholder="Email address" />
              <input type="submit" value="Start trial" />
              <p>
                Already a member? <span>Sign in</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrialSection