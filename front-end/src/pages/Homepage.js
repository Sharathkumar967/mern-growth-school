import React from "react";
import "./Homepage.scss";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero-section/HeroSection";

const Homepage = () => {
  return (
    <>
      <section className="hero-section">
        <Navbar />
        <HeroSection />
      </section>
    </>
  );
};

export default Homepage;
