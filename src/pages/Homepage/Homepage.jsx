import React from "react";
import BusinessBanking from "../../components/BusinessBanking/BusinessBanking";
import BusinessesMarquee from "../../components/BusinessesMarquee/BusinessesMarquee";
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
      <BusinessesMarquee />
    </>
  );
};

export default Homepage;
