import solutions from "../data/solutions";

const Solutions = () => {
  return (
    <div className="w-full py-12 md:py-24 px-4 bg-[#F5F6FB] dark:bg-[#0F3E5B]">
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto flex flex-col  items-center justify-center w-full"
      >
        <h3 className="text-2xl md:text-4xl text-[#15572A] font-semibold dark:text-white">
          Custom Industry Solutions
        </h3>

        <div className="w-full grid mt-8 md:mt-16 grid-cols-1 md:grid-cols-2 lg:md:grid-cols-4 gap-6">
          {solutions?.map((solution, index) => (
            <div
              key={index}
              className="w-full border-[1px] flex flex-col items-start justify-start border-desc p-4 rounded-[10px]"
            >
              <div
                className="w-16 h-12  mx-auto"
                style={{ width: `${60 * (solution.imageSize || 1)}px` }}
              >
                <img src={solution.image} alt="" />
              </div>
              <h3 className="mt-8 h-auto mb-4 text-left  text-title text-lg font-semibold dark:text-white">
                {solution.title}
              </h3>
              <p className="text-sm mb-4 text-desc dark:text-white">
                {solution.desc}
              </p>

              <a
                href=""
                target="_blank"
                className="text-section-label text-sm hover:underline inline-block mt-auto"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
