import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PaymentSuite from "../../components/PaymentSuite/PaymentSuite";
import SplashCard from "../../components/SplashCard/SplashCard";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <SplashCard />
      <PaymentSuite />
    </>
  );
};

export default Homepage;
