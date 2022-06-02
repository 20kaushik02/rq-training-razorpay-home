import React from "react";
import styles from "./PaymentSuite.module.css";

const PaymentSuite = () => {
  return (
    <div className={styles.paymentSuite}>
      <h2 className={styles.paymentSuite__oneLiner}>
        Accept Payments with Razorpay Payment Suite
      </h2>
      <div className={styles.paymentSuite__divider} />
      <div className={styles.paymentSuiteCard}>
        <h3 className={styles.paymentSuiteCard__oneLiner}>
          Supercharge your business with the all-powerful
          <p className={styles.paymentSuiteCard__productName}>
            {" "}
            Payment Gateway
          </p>
        </h3>
        <ul className={styles.paymentSuiteFeatures}>
          <li className={styles.paymentSuiteFeatures__feature}>
            &nbsp;100+ Payment Methods
          </li>
          <li className={styles.paymentSuiteFeatures__feature}>
            &nbsp;Industry Leading Success Rate
          </li>
          <li className={styles.paymentSuiteFeatures__feature}>
            &nbsp;Superior Checkout Experience
          </li>
          <li className={styles.paymentSuiteFeatures__feature}>
            &nbsp;Easy to Integrate
          </li>
          <li className={styles.paymentSuiteFeatures__feature}>
            &nbsp;Instant Settlements from day 1
          </li>
          <li className={styles.paymentSuiteFeatures__feature}>
            &nbsp;In-depth Reporting and Insights
          </li>
        </ul>
        <div className={styles.paymentSuiteCard__btncontainer}>
          <a href="#" className={styles.paymentSuiteCard__btnlink}>
            <button
              className={`${styles.paymentSuiteCard__signupbtn} ${styles.paymentSuiteCard_btn}`}
            >
              Sign Up Now
            </button>
          </a>
          <a href="#" className={styles.paymentSuiteCard__btnlink}>
            <button
              className={`${styles.paymentSuiteCard__transpbtn} ${styles.paymentSuiteCard_btn}`}
            >
              Know More
            </button>
          </a>
        </div>
      </div>
      <div className={styles.paymentSuiteFunctionContainer}>
        <div className={styles.paymentSuiteFunction}>
          <a href="#" className={styles.paymentSuiteFunction__link}>
            <h4 className={styles.paymentSuiteFunction__header}>
              Payment Links
            </h4>
            <p className={styles.paymentSuiteFunction__desc}>
              Share payment link via an email, SMS, messenger, chatbot etc. and
              get paid immediately
            </p>
            <p className={styles.paymentSuiteFunction__more}>Know More</p>
          </a>
        </div>
        <div className={styles.paymentSuiteFunction}>
          <a href="#" className={styles.paymentSuiteFunction__link}>
            <h4 className={styles.paymentSuiteFunction__header}>
              Payment Pages
            </h4>
            <p className={styles.paymentSuiteFunction__desc}>
              Take your store online instantly with zero coding. Accept
              international and domestic payments
            </p>
            <p className={styles.paymentSuiteFunction__more}>Know More</p>
          </a>
        </div>
        <div className={styles.paymentSuiteFunction}>
          <a href="#" className={styles.paymentSuiteFunction__link}>
            <h4 className={styles.paymentSuiteFunction__header}>
              Payment Buttons
            </h4>
            <p className={styles.paymentSuiteFunction__desc}>
              Create, Copy and Collect With Payment Button. Collect one time or
              subscription payments and more
            </p>
            <p className={styles.paymentSuiteFunction__more}>Know More</p>
          </a>
        </div>
        <div className={styles.paymentSuiteFunction}>
          <a href="#" className={styles.paymentSuiteFunction__link}>
            <h4 className={styles.paymentSuiteFunction__header}>
              Subscriptions
            </h4>
            <p className={styles.paymentSuiteFunction__desc}>
              Subscription plans with automated recurring transactions on
              various payment modes.
            </p>
            <p className={styles.paymentSuiteFunction__more}>Know More</p>
          </a>
        </div>
        <div className={styles.paymentSuiteFunction}>
          <a href="#" className={styles.paymentSuiteFunction__link}>
            <h4 className={styles.paymentSuiteFunction__header}>Route</h4>
            <p className={styles.paymentSuiteFunction__desc}>
              Split incoming payments auto-matically to vendor’s accounts,
              manage marketplace money flow...
            </p>
            <p className={styles.paymentSuiteFunction__more}>Know More</p>
          </a>
        </div>
        <div className={styles.paymentSuiteFunction}>
          <a href="#" className={styles.paymentSuiteFunction__link}>
            <h4 className={styles.paymentSuiteFunction__header}>
              Smart Collect
            </h4>
            <p className={styles.paymentSuiteFunction__desc}>
              Automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments
              using Virtual Accounts and UPI-IDs
            </p>
            <p className={styles.paymentSuiteFunction__more}>Know More</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuite;
