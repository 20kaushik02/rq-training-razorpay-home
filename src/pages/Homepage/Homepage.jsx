import React from "react";
import BusinessBanking from "../../components/Business Banking/BusinessBanking";
import Navbar from "../../components/Navbar/Navbar";
import PaymentSuite from "../../components/PaymentSuite/PaymentSuite";
import SplashCard from "../../components/SplashCard/SplashCard";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <SplashCard />
      <PaymentSuite />
      <BusinessBanking />
    </>
  );
};

export default Homepage;
