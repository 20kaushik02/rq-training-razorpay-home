import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="https://razorpay.com" className={styles.navbar__logocontainer}>
        <img
          src={`${process.env.PUBLIC_URL}/logo.svg`}
          alt="Razorpay"
          className={styles.navbar__logo}
        />
      </a>
      <div className={styles.navbar__links}>
        <p className={styles.navbar__link}>Payments</p>
        <p className={styles.navbar__link}>Banking plus</p>
        <p className={styles.navbar__link}>Resources</p>
        <p className={styles.navbar__link}>Partners</p>
        <p className={styles.navbar__link}>Support</p>
        <p className={styles.navbar__link}>Pricing</p>
      </div>
      <button className={styles.navbar__loginbtn}>Log In</button>
      <button className={styles.navbar__signupbtn}>Sign Up</button>
    </div>
  );
};

export default Navbar;
