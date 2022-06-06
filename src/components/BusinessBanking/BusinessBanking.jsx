import React from "react";
import styles from "./BusinessBanking.module.css";

const BusinessBanking = () => {
  return (
    <div className={styles.businessBanking}>
      <h2 className={styles.businessBanking__oneLiner}>
        Explore Razorpay Business Banking
      </h2>
      <div className={styles.businessBanking__divider} />
      <div className={styles.businessBankingCard}>
        <h3 className={styles.businessBankingCard__oneLiner}>
          Manage your company’s finances with&nbsp;
          <img
            src={`${process.env.PUBLIC_URL}/xlogo.svg`}
            alt={"Razorpay X"}
            className={styles.businessBankingCard__logo}
          />
          <p className={styles.businessBankingCard__productName}>
            {" "}
            Business Banking
          </p>
        </h3>
        <ul className={styles.businessBankingFeatures}>
          <li className={styles.businessBankingFeatures__feature}>
            &nbsp;Open a fully digital current account
          </li>
          <li className={styles.businessBankingFeatures__feature}>
            &nbsp;Automate payables and compliment payments
          </li>
          <li className={styles.businessBankingFeatures__feature}>
            &nbsp;Simplify and track spends with Corporate cards
          </li>
          <li className={styles.businessBankingFeatures__feature}>
            &nbsp;View financial insights at a glance
          </li>
        </ul>
        <div className={styles.businessBankingCard__btncontainer}>
          <a href="#" className={styles.businessBankingCard__btnlink}>
            <button
              className={`${styles.businessBankingCard__signupbtn} ${styles.businessBankingCard_btn}`}
            >
              Sign Up Now
            </button>
          </a>
          <a href="#" className={styles.businessBankingCard__btnlink}>
            <button
              className={`${styles.businessBankingCard__transpbtn} ${styles.businessBankingCard_btn}`}
            >
              Know More
            </button>
          </a>
        </div>
      </div>
      <div className={styles.businessBankingFunctionContainer}>
        <div className={styles.businessBankingFunction}>
          <a href="#" className={styles.businessBankingFunction__link}>
            <h4 className={styles.businessBankingFunction__header}>
              Current Account
            </h4>
            <p className={styles.businessBankingFunction__desc}>
              Current accounts for fast-growing businesses, supported by the
              best-in-class technology
            </p>
            <p className={styles.businessBankingFunction__more}>Know More</p>
          </a>
        </div>
        <div className={styles.businessBankingFunction}>
          <a href="#" className={styles.businessBankingFunction__link}>
            <h4 className={styles.businessBankingFunction__header}>
              Capital and Credit
            </h4>
            <p className={styles.businessBankingFunction__desc}>
              Instant additional cash and corporate cards designed for growing
              businesses
            </p>
            <p className={styles.businessBankingFunction__more}>Know More</p>
          </a>
        </div>
        <div className={styles.businessBankingFunction}>
          <a href="#" className={styles.businessBankingFunction__link}>
            <h4 className={styles.businessBankingFunction__header}>Payouts</h4>
            <p className={styles.businessBankingFunction__desc}>
              Make simple, reliable and secure payouts to bank accounts, UPI IDs
              or wallets
            </p>
            <p className={styles.businessBankingFunction__more}>Know More</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanking;
