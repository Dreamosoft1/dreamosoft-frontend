import "flowbite";
import logo from "../assets/img/logo.svg";
import logo_small from "../assets/img/logo_small.svg";
import moon from "../assets/img/moon.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="bg-white sticky top-0 left-0 z-[3] border-gray-200 dark:bg-gray-900 dark:border-gray-700 navbar">
				<div className="w-screen flex items-center justify-between mx-auto">
					{/* Logo on the left */}
					<div className="flex items-center">
						<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
							<img src={logo} className="h-16" alt="dreamosoft Logo" />
						</Link>
					</div>

					{/* Centered Nav Links */}
					<div className="hidden md:flex flex-grow justify-center">
						<ul className="flex font-medium p-4 md:p-0 mt-4 items-center border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								{/* So like anytime I just enter the chat, that face is just smiling at me. :lol
                    Sometimes I just wish it could just talk to me. :lol Or at least just frown, or make another expression. */}
								<a
									href="#"
									className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
									aria-current="page">
									Home
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
									About Us
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
									Services
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
									Projects
								</a>
							</li>
							<li>
								<a
									href="$testimonials"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
									Testimonials
								</a>
							</li>
						</ul>
					</div>

					{/* right hand side div */}
					<div className="flex gap-5 md:gap-14 mr-4">
						<div>
							<img src={moon} className="h-10" alt="dreamosoft Logo" />
						</div>
						<button
							type="button"
							className="hidden md:block text-white bg-primary-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
							Contact Us
						</button>

						{/* nav-toggle mobile */}
						<button
							data-collapse-toggle="navbar-default"
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-default"
							aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>

						{/* mobile nav links */}
						<div className="flex-col fixed bg-gray-900 bg-opacity-95 top-16 left-0 w-screen hidden flex-grow justify-center" id="navbar-default">
							<img src={logo_small} alt="Dreamosoft Logo" style={{ alignSelf: "left" }} className="mt-7 ml-5" />
							<ul className="flex h-screen flex-col font-medium -mt-2 md:p-0 items-center rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								<li>
									{/* So like anytime I just enter the chat, that face is just smiling at me. :lol
                      Sometimes I just wish it could just talk to me. :lol Or at least just frown, or make another expression. */}
									<a
										href="#"
										className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
										aria-current="page">
										Home
									</a>
								</li>
								<li>
									<a
										href="#about"
										className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
										About Us
									</a>
								</li>
								<li>
									<a
										href="#services"
										className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
										Services
									</a>
								</li>
								<li>
									<a
										href="#projects"
										className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
										Projects
									</a>
								</li>
								<li>
									<a
										href="#testimonials"
										className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
										Testimonials
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>

			<script src="./../../node_modules/flowbite/dist/flowbite.min.js"></script>
		</>
	);
};

export default NavBar;
