"use client";
import profileImage from "../assets/img/profile.png";
import quote from "../assets/icons/quote.svg";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Angeline",
    image: profileImage,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jack Festus",
    image: profileImage,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    name: "Mark",
    image: profileImage,
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    name: "Sarah",
    image: profileImage,
    quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Michael",
    image: profileImage,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    name: "Emily",
    image: profileImage,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="w-screen mx-auto px-4 py-16 bg-white dark:bg-[#055987]">
      <div data-aos="fade-up">
        <h3 className="text-3xl font-bold text-section-heading mb-6 text-center dark:text-white">
          Testimony
        </h3>
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className="w-10 md:w-20 h-[4px] rounded-full shadow-xl bg-section-label"></span>
          <p className="text-section-label text-sm md:text-[16px]">
            What Our Clients Say About Us
          </p>
          <span className="w-10 md:w-20 h-[4px] rounded-full shadow-xl bg-section-label"></span>
        </div>
        <div className="relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-2">
                <div
                  className={`bg-white rounded-lg h-96 shadow-lg  transition-all duration-300 relative ${
                    index === currentIndex + 1 ? "" : "scale-75"
                  }`}
                >
                  <div className="bg-primary-1 w-full max-w-full h-20 absolute rounded-t-md"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg border-4 border-white z-30"
                  />
                  <div className="absolute top-36 flex flex-col">
                    <h3 className="text-2xl font-semibold text-center mb-2 z-100 top-1/3 m-auto">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-center">CEO</p>
                    <hr className="h-px my-4 w-4/5 m-auto  bg-gray-300 border-0 dark:bg-gray-700" />
                    <img src={quote} alt="quote" className="h-8" />
                    <p className="p-6 text-gray-600 text-center italic text-sm">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
