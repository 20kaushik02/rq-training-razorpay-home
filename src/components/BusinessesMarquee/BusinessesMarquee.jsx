import React from "react";
import styles from "./BusinessesMarquee.module.css";

const BusinessesMarquee = () => {
  return (
    <div className={styles.businessSection}>
      <div className={styles.businessText}>
        <div
          className={`${styles.businessText__heading} ${styles.businessText_padding}`}
        >
          Join the 50,00,000+ businesses using Razorpay{" "}
        </div>
        <div className={styles.businessText__divider} />
        <div
          className={`${styles.businessText__desc} ${styles.businessText_padding}`}
        >
          We make it easier for you to focus on building great products while we
          work on simplifying your payments. Become one of us by joining
          thousands of our happy users and simplify the online payment
          experience for your customers.
          <br /><br />
          Focus on your business while we handle the complexities of payments
          for you.
        </div>
      </div>
      <div className={styles.businessMarquee}>
        <img
          src={`${process.env.PUBLIC_URL}/business_marquee.png`}
          alt="airtel, hotstar, swiggy, facebook, zomato, irctc, udacity, and more"
          className={styles.businessMarquee__image}
        />
      </div>
    </div>
  );
};

export default BusinessesMarquee;
