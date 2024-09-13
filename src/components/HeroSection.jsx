import team from "../assets/img/team.svg";
import projects from "../assets/img/projects.svg";
import smile from "../assets/img/smile.svg";

const HeroSection = () => {
	return (
		<>
			{" "}
			<section className="pb-10">
				{/* banner header*/}
				<h1 className="text-center text-secondary-2 text-5xl  font-body font-bold mt-24" style={{ letterSpacing: "3px" }}>
					Innovative Software Company{" "}
				</h1>

				{/* banner text */}
				<p className="text-center w-[80%] md:w-[48%] m-auto text-xs mt-12">
					{" "}
					We're an innovative software company dedicated to crafting custom solutions that make a real difference. With a focus on user experience and cutting-edge technology, we help
					businesses streamline their operations and navigate digital transformation confidently.
				</p>

				{/* buttons div */}
				<div className="flex gap-2 justify-center mt-16">
					<button type="button" className="text-white bg-secondary-2 hover:bg-green w-36 md:w-52 md:h-12 focus:ring-4 font-medium rounded-md text-sm px-2 md:px-5 py-2.5 me-2 mb-2">
						Request a Service
					</button>
					<button
						type="button"
						className="text-white bg-primary-1 hover:bg-blue-800 w-36 md:w-52 md:h-12 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 md:px-5 py-2.5 me-2 mb-2">
						Chat with Us
					</button>
				</div>
				{/* achievements */}
				<div data-aos="fade-up" data-aos-delay="500" className="md:mt-20 mt-12 flex justify-center md:gap-0 gap-4 text-center text-primary-1">
					<div className="flex flex-col items-center justify-start w-64 border-r-2">
						<img src={smile} alt="team" className="md:h-12 h-7 mb-4" />
						<h2 className="text-3xl font-bold">100+</h2>
						<p className="text-gray-600 text-xs w-24">Happy Clients</p>
					</div>
					<div className="flex flex-col items-center justify-start w-64 border-r-2">
						<img src={team} alt="team" className="md:h-12 h-7 mb-4" />
						<h2 className="text-3xl font-bold">10+</h2>
						<p className="text-gray-600 text-xs w-24">Team Members</p>
					</div>
					<div className="flex flex-col items-center justify-start w-64">
						<img src={projects} alt="team" className="md:h-12 h-7 mb-4" />
						<h2 className="text-3xl font-bold">50+</h2>
						<p className="text-gray-600 text-xs w-24">Completed Projects</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
