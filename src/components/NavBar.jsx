import "flowbite";
import logo from "../assets/img/logo.svg";
import logoWhite from "../assets/img/logo-white.svg";
import logo_small from "../assets/img/logo_small.svg";
import moon from "../assets/img/moon.svg";
import sun from "../assets/img/sun.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  if (theme == "dark") document.body.classList.add("dark");

  function switchTheme() {
    if (theme == "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.body.classList.toggle("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.toggle("dark");
    }
  }
  return (
    <>
      <nav className="bg-white sticky top-0 left-0 z-[3] border-gray-200 dark:bg-[#010833] dark:border-gray-700 navbar shadow-md">
        <div className="w-screen flex items-center justify-between mx-auto">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={theme == "light" ? logo : logoWhite}
                className="h-16"
                alt="dreamosoft Logo"
              />
            </Link>
          </div>

          {/* Centered Nav Links */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex font-medium p-4 md:p-0 mt-4 items-center border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#010833] dark:border-gray-700">
              <Link to="/" className="nav-link">
                <li>
                  <a
                    className="block py-2 px-3 text-white bg-[#34BDFC] rounded md:bg-transparent md:text-[#34BDFC] md:p-0 md:dark:text-[#34BDFC] dark:bg-[#34BDFC] md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* right hand side div */}
          <div className="flex gap-5 md:gap-14 mr-4">
            <div>
              <img
                src={theme == "light" ? moon : sun}
                onClick={switchTheme}
                className="h-10"
                alt="dreamosoft Logo"
              />
            </div>
            <button
              type="button"
              className="hidden md:block text-white bg-primary-1 hover:bg-[#34BDFC] focus:ring-4 focus:ring-[#34BDFC] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#34BDFC] dark:hover:bg-[#34BDFC] focus:outline-none dark:focus:ring-[#34BDFC]"
            >
              Contact Us
            </button>

            {/* nav-toggle mobile */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary-1 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* mobile nav links */}
            <div
              className="mobile-nav flex-col fixed bg-gray-900 bg-opacity-95 top-16 left-0 w-screen hidden flex-grow justify-center"
              id="navbar-default"
            >
              <img
                src={logo_small}
                alt="Dreamosoft Logo"
                style={{ alignSelf: "left" }}
                className="mt-7 ml-5"
              />
              <ul className="flex h-screen flex-col font-medium -mt-2 md:p-0 items-center rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    onClick={() =>
                      document
                        .querySelector(
                          "[data-collapse-toggle='navbar-default']",
                        )
                        .click()
                    }
                    className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() =>
                      document
                        .querySelector(
                          "[data-collapse-toggle='navbar-default']",
                        )
                        .click()
                    }
                    className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={() =>
                      document
                        .querySelector(
                          "[data-collapse-toggle='navbar-default']",
                        )
                        .click()
                    }
                    className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() =>
                      document
                        .querySelector(
                          "[data-collapse-toggle='navbar-default']",
                        )
                        .click()
                    }
                    className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    onClick={() =>
                      document
                        .querySelector(
                          "[data-collapse-toggle='navbar-default']",
                        )
                        .click()
                    }
                    className="block py-2 px-3 text-white my-4 text-2xl rounded hover:bg-primary-1 md:hover:bg-transparent md:border-0 md:hover:text-[#34BDFC] md:p-0 dark:text-white md:dark:hover:text-[#34BDFC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
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
