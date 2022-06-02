import React from "react";
import styles from "./SplashCard.module.css";

const SplashCard = () => {
  return (
    <>
      <div className={styles.splashcard}>
        <div className={styles.splashtext}>
          <div
            className={`${styles.splashtext__heading} ${styles.splashtext_padding}`}
          >
            Power your finance, grow your business
          </div>
          <div className={styles.splashtext__divider} />
          <div
            className={`${styles.splashtext__desc} ${styles.splashtext_padding}`}
          >
            Accept payments from customers. Automate payouts to vendors and
            employees. Never run out of working capital.
          </div>
          <a href="#" className={styles.splashtext__btnlink}>
            <button className={styles.splashtext__btn}>Sign Up Now</button>
          </a>
        </div>
        <div className={styles.splashimage}>
          <img
            src={`${process.env.PUBLIC_URL}/splash.jpg`}
            alt="Online Payments, Virtual Accounts, Bank Transfer, and more"
            className={styles.splashimage__image}
          />
        </div>
      </div>
      <svg
        viewBox="0 0 1446 199"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z"
          fill="#02042B"
        ></path>
      </svg>
    </>
  );
};

export default SplashCard;
