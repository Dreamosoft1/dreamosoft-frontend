import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import TechStack from "./TechStack.jsx";
import AboutUs from "./AboutUs.jsx";
import HeroSection from "./HeroSection.jsx";
import Solutions from "./Solutions.jsx";
import Services from "./Services.jsx";
import ChooseUs from "./ChooseUs.jsx";
import Projects from "./Projects.jsx";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";
import ScreensImage from "../assets/img/screens.png";
import Testimony from "./Testimony.jsx";
import SimpleCarousel from "./SimpleCarousel.jsx";
import { Toaster } from "react-hot-toast";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Toaster />
      {/* Hero section */}
      <HeroSection />
      <TechStack />
      <AboutUs />
      <Services />

      {/* Solutions  */}
      <section
        id="solutions"
        className=" w-full py-4 md:py-16 px-4 bg-[#4EA4D6] dark:bg-[#010833]"
      >
        <div
          data-aos="fade-up"
          className="w-full max-w-5xl  mx-auto flex flex-col md:flex-row items-stretch gap-0 md:gap-16 justify-normal"
        >
          <div className="w-full md:w-1/2">
            <img
              src={ScreensImage}
              alt="Screens"
              className="w-full h-72 md:h-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl mb-6 text-white">
              Intelligent Software Solutions
            </h3>
            <ul className="list-disc ml-5">
              <li className="text-white font-light opacity-80 mb-4">
                Complete Web App
              </li>
              <li className="text-white font-light opacity-80 mb-4">
                Bug fixes
              </li>
              <li className="text-white font-light opacity-80 mb-4">
                Dev Updates
              </li>
              <li className="text-white font-light opacity-80 mb-4">
                API integration
              </li>
              <li className="text-white font-light opacity-80 mb-4">
                {" "}
                And More
              </li>
            </ul>

            <button className="bg-white md:ml-0 block mx-auto px-6 hover:opacity-60 py-4 rounded-[10px] text-section-heading font-bold">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <ChooseUs />
      <Projects />
      <Solutions />
      <ContactUs />
      <Testimony />
      <Footer />
    </>
  );
};

export default Home;
