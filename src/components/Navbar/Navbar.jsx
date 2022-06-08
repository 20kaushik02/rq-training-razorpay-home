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
        <p className={`${styles.navbar__link} ${styles.navbar__paymentslink}`}>
          Payments
        </p>
        <div
          className={`${styles.navbarDropdown} ${styles.navbar__paymentsdrop}`}
        >
          <div className={styles.navbarDropdown__col}>
            <p className={styles.navbarDropdown__secname}>ACCEPT PAYMENTS</p>
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
          </div>
          <div className={styles.navbarDropdown__col}>
            <p className={styles.navbarDropdown__emptysecname} />
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
          </div>
          <div className={styles.navbarDropdown__col}>
            <p className={styles.navbarDropdown__emptysecname} />
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
            <p className={styles.navbarDropdown__secname}>ACCEPT PAYMENTS</p>
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
            <p className={styles.navbarDropdown__secname}>ACCEPT PAYMENTS</p>
            <a href="#" className={styles.navbarDropdown__link}>
              <img
                src={`${process.env.PUBLIC_URL}/nav_drop_links/payments/payment-gateway.svg`}
                alt=""
                className={styles.navbarDropLink__icon}
              />
              <div className={styles.navbarDropLink__text}>
                <p className={styles.navbarDropLink__name}>Payment Gateway</p>
                <p className={styles.navbarDropLink__desc}>
                  Payments on your Website and App
                </p>
              </div>
            </a>
          </div>
          <div className={styles.navbarDropdown__col}></div>
          <div className={styles.navbarDropdown__col}></div>
        </div>
        <p
          className={`${styles.navbar__link} ${styles.navbar__bankingpluslink}`}
        >
          Banking plus
        </p>
        <p className={`${styles.navbar__link} ${styles.navbar__resourceslink}`}>
          Resources
        </p>
        <p className={`${styles.navbar__link} ${styles.navbar__partnerslink}`}>
          Partners
        </p>
        <p className={`${styles.navbar__link} ${styles.navbar__supportlink}`}>
          Support
        </p>
        <p className={`${styles.navbar__link} ${styles.navbar__pricinglink}`}>
          Pricing
        </p>
      </div>
      <button className={styles.navbar__loginbtn}>Log In</button>
      <button className={styles.navbar__signupbtn}>Sign Up</button>
    </div>
  );
};

export default Navbar;
