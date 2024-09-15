import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import TechStack from "./TechStack.jsx";
import AboutUs from "./AboutUs.jsx";
import HeroSection from "./HeroSection.jsx";
import Solutions from "./Solutions.jsx";
import Services from "./Services.jsx";

import ScreensImage from "../assets/img/screens.png";

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
			<Services />

			{/* Solutions  */}
			<section id="solutions" className=" w-full py-16 bg-[#4EA4D6]">
				<div className="w-full max-w-5xl  mx-auto flex items-stretch gap-16 justify-normal">
					<div className="w-1/2">
						<img src={ScreensImage} alt="Screens" className="w-full h-full" />
					</div>
					<div className="w-1/2">
						<h3 className="text-3xl mb-6 text-white">Intelligent Software Solutions</h3>
						<ul className="list-disc ml-5">
							<li className="text-white font-light opacity-80 mb-4">Complete Web App</li>
							<li className="text-white font-light opacity-80 mb-4">Bug fixes</li>
							<li className="text-white font-light opacity-80 mb-4">Dev Updates</li>
							<li className="text-white font-light opacity-80 mb-4">API integration</li>
							<li className="text-white font-light opacity-80 mb-4"> And More</li>
						</ul>

						<button className="bg-white px-6 hover:opacity-60 py-4 rounded-[10px] text-section-heading font-bold">Get In Touch</button>
					</div>
				</div>
			</section>
			<Solutions />
		</>
	);
};

export default Home;
