import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import TechStack from "./TechStack";
import AboutUs from "./AboutUs";
import HeroSection from "./HeroSection";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Hero section */}
      <HeroSection />

      <TechStack />
      <AboutUs />
    </>
  );
};

export default Home;
