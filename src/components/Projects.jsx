import AppleLogo from "../assets/img/apple.png";
import GooglePlayImage from "../assets/img/google_play.png";
import ProjectImage from "../assets/img/project.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 pb-8 bg-[#D7FFE7] dark:bg-[#157E3F]"
    >
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto w-full  flex flex-col items-center justify-center"
      >
        <h3 className="text-2xl font-bold  text-[#177525] dark:text-white">
          Recent Projects
        </h3>
        <div className="w-full mt-12 flex flex-col md:flex-row items-stretch justify-between gap-12">
          <div className="w-full md:w-1/2 h-auto">
            <img src={ProjectImage} alt="Projects" className="w-full h-full" />
          </div>
          <div className="w-full md:w-1/2 p-4 py-4 md:py-8">
            <div className="flex justify-center md:justify-start items-center gap-3">
              <span className="w-10 md:hidden h-[3px] rounded-full bg-[#0AAB4A] mt-2"></span>
              <h3 className="text-[#177525] bg- my-4 font-bold text-xl dark:text-white">
                The ShuttleHub Project
              </h3>
              <span className="dark:bg-white w-10 h-[3px] rounded-full bg-[#0AAB4A] mt-2"></span>
            </div>
            <p className="mt-4 text-center md:text-left md:mt-12 dark:text-white">
              The ShuttleHub project aims to track buses used on university
              campuses to streamline onboarding for students, ensuring they have
              easy access to transportation information and enhancing their
              overall experience.
            </p>
            <a
              href=""
              className="text-center md:text-left text-[#0021F5C9] hover:underline"
            >
              Learn more...
            </a>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
              <button className="flex items-center py-2 px-4 rounded-[3px] hover:opacity-70 justify-start gap-3 bg-black text-white">
                <div className="w-8 h-8">
                  <img src={AppleLogo} alt="" className="w-full h-full" />
                </div>
                <div className="">
                  <p className="w-full text-[10px] dark:opacity-100 opacity-50 ">
                    Download on the
                  </p>
                  <p className="w-full text-[12px] -ml-2">App Store</p>
                </div>
              </button>
              <button className="flex items-center py-2 px-4 rounded-[3px] hover:opacity-70 justify-start gap-3 bg-black text-white">
                <div className="w-8 h-8">
                  <img src={GooglePlayImage} alt="" className="w-full h-full" />
                </div>
                <div className="">
                  <p className="w-full dark:opacity-100 text-[10px] opacity-50">
                    Download on the
                  </p>
                  <p className="w-full text-[12px] -ml-2">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
