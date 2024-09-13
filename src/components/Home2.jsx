import React from "react";
import logo from "../assets/img/logo.svg";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Dreamosoft Logo" className="h-8" />
          <ul className="flex space-x-8">
            <li className="text-blue-700 font-medium hover:text-blue-900">
              Home
            </li>
            <li className="text-gray-600 hover:text-blue-700">About Us</li>
            <li className="text-gray-600 hover:text-blue-700">Services</li>
            <li className="text-gray-600 hover:text-blue-700">Projects</li>
            <li className="text-gray-600 hover:text-blue-700">Testimonials</li>
          </ul>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Innovative Software Company
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We're an innovative software company dedicated to crafting custom
            solutions that make a real difference. With a focus on user
            experience and cutting-edge technology, we help businesses
            streamline their operations and navigate digital transformation
            confidently.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
              Request a Service
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Chat with Us
            </button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">100+</h2>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">10+</h2>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">50+</h2>
              <p className="text-gray-600">Completed Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Tech Stack</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Empowering Innovation: Discover the Cutting-Edge Tools and
            Technologies Driving Dreamosoft's Software Solutions.
          </p>
          {/* Add your tech stack logos/icons here */}
          <div className="mt-8 flex justify-center space-x-4">
            <img src="path_to_html5_logo" alt="HTML5" className="h-12" />
            <img src="path_to_js_logo" alt="JavaScript" className="h-12" />
            {/* Add more icons as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
