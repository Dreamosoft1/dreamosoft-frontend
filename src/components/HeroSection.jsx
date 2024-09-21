import team from "../assets/img/team.svg";
import teamWhite from "../assets/img/team-white.svg";
import projects from "../assets/img/projects.svg";
import projectsWhite from "../assets/img/projects-white.svg";
import smile from "../assets/img/smile.svg";
import smileWhite from "../assets/img/smile-white.svg";

const HeroSection = () => {
  return (
    <>
      {" "}
      <section className="pb-10">
        {/* banner header*/}
        <h1
          className="text-center text-secondary-2 dark:text-white text-5xl  font-body font-bold mt-24"
          style={{ letterSpacing: "3px" }}
        >
          Innovative Software Company{" "}
        </h1>

        {/* banner text */}
        <p className="text-center w-[80%] dark:text-white md:w-[48%] m-auto text-xs mt-12">
          {" "}
          We're an innovative software company dedicated to crafting custom
          solutions that make a real difference. With a focus on user experience
          and cutting-edge technology, we help businesses streamline their
          operations and navigate digital transformation confidently.
        </p>

        {/* buttons div */}
        <div className="flex gap-2 justify-center mt-16">
          <button
            type="button"
            className="text-white bg-secondary-2 hover:bg-green w-36 md:w-52 md:h-12 focus:ring-4 font-medium rounded-md text-sm px-2 md:px-5 py-2.5 me-2 mb-2"
          >
            Request a Service
          </button>
          <button
            type="button"
            className="text-white bg-primary-1 hover:bg-blue-800 w-36 md:w-52 md:h-12 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 md:px-5 py-2.5 me-2 mb-2"
          >
            Chat with Us
          </button>
        </div>
        {/* achievements */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="md:mt-20 mt-12 flex justify-center md:gap-0 gap-4 text-center text-primary-1"
        >
          <div className="flex flex-col items-center justify-start w-64 border-r-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 512 512"
              className="fill-black dark:fill-white md:h-12 h-7 mb-4"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM96.8 314.1c-3.8-13.7 7.4-26.1 21.6-26.1l275.2 0c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432s-140.2-50-159.2-117.9zM217.6 212.8s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zm160 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0z" />
            </svg>

            <h2 className="text-3xl font-bold">100+</h2>
            <p className="mt-3 text-gray-600 text-xs w-24 dark:text-white">
              Happy Clients
            </p>
          </div>
          <div className="flex flex-col items-center justify-start w-64 border-r-2">
            <svg
              className="fill-black dark:fill-white md:h-12 h-7 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" />
            </svg>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-3 text-gray-600 text-xs w-24 dark:text-white">
              Team Members
            </p>
          </div>
          <div className="flex flex-col items-center justify-start w-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-black dark:fill-white md:h-12 h-7 mb-4"
            >
              <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
            </svg>

            <h2 className="text-3xl font-bold">50+</h2>
            <p className="mt-3 w-fit text-gray-600 text-xs dark:text-white">
              Completed Projects
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
