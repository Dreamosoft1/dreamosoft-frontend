const Footer = () => {
	return (
		<footer className="w-full py-12 text-white md:py-24 px-4 bg-[#4EA4D6]">
			<div className="w-full max-w-6xl mx-auto flex-col md:flex-row flex items-stretch gap-12 justify-between">
				<div className="w-full md:w-[30%]">
					<h3 className="text-2xl mb-4 font-bold">Dreamosoft</h3>
					<p className="w-full md:w-[90%]">
						Dreamosoft is a dynamic company that specializes in software solutions and also offers a wide range of comprehensive IT courses, providing individuals with the opportunity to
						acquire valuable technical skills and stay ahead in today's rapidly evolving digital landscape.
					</p>
				</div>
				<div className="w-full flex flex-row md:w-2/5">
					<div className="w-full md:w-1/2">
						<h3 className="text-2xl mb-6 font-bold">Quick Links</h3>
						<nav className="flex flex-col gap-3">
							<a href="#">Home</a>
							<a href="#about">About Us</a>
							<a href="#services">Services</a>
							<a href="#projects">Projects</a>
							<a href="#testimonials">Testimonials</a>
							<a href="#contact">Contact Us</a>
						</nav>
					</div>
					<div className="w-full md:w-1/2">
						<h3 className="text-2xl mb-6 font-bold">Services</h3>
						<ul className="flex flex-col gap-3">
							<li>Software Development</li>
							<li>Web Development</li>
							<li>UI/UX Design</li>
							<li>Data Analysis</li>
							<li>Machine Learning</li>
						</ul>
					</div>
				</div>
				<div className="w-full md:w-[30%]">
					<h3 className="text-2xl mb-6 font-bold">News Letter</h3>
					<p>Join our Newsletter</p>

					<div className="w-full flex items-center justify-between bg-white rounded-[5px] h-auto mt-4 p-3">
						<input type="text" aria-label="Email address" className="w-3/5 text-black focus:outline-0 focus:border-0 px-2 border-0 outline-0" placeholder="Enter your email" />
						<button className="bg-[#1509F9] opacity-80 h-10 rounded-[5px] px-3">Subscribe</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
