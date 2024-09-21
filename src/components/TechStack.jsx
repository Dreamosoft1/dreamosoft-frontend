import htmlIcon from "../assets/icons/html-icon.svg";
import jsIcon from "../assets/icons/js-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import pythonIcon from "../assets/icons/python-icon.svg";
import aiIcon from "../assets/icons/ai-icon.svg";
import "aos/dist/aos.css";

const TechStack = () => {
  return (
    <div className="bg-white dark:bg-[#010833]">
      {/* Tech Stack Section */}
      <section
        className="py-12 pt-24 bg-gray-50 dark:bg-[#010833] mt-1"
        data-aos="fade-up"
      >
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-section-heading dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-xs md:text-sm dark:text-gray-400 mb-10 w-[90%] md:w-[50%] mx-auto text-primary-1">
            Empowering Innovation: Discover the Cutting-Edge Tools and
            Technologies Driving Dreamsoft's Software Solutions
          </p>

          {/* Icons container */}
          <div className="flex md:justify-between md:w-[70%] m-auto gap-3 items-center justify-center">
            <div className="flex justify-center">
              <img src={htmlIcon} alt="HTML Icon" className="h-20 w-auto" />
            </div>
            <div className="flex justify-center">
              <img src={jsIcon} alt="JavaScript Icon" className="h-20 w-auto" />
            </div>
            <div className="flex justify-center">
              <img src={cssIcon} alt="CSS Icon" className="h-20 w-auto" />
            </div>
            <div className="flex justify-center">
              <img src={pythonIcon} alt="Python Icon" className="h-20 w-auto" />
            </div>
            <div className="flex justify-center">
              <img src={aiIcon} alt="AI Icon" className="h-20 w-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
