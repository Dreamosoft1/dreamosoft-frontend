import FlexibleProjectsImage from "../assets/img/flexible_projects.png";
import AffordablePricingImage from "../assets/img/affordable_pricing.png";
import CareerAdvancementImage from "../assets/img/career_advancement.png";

const ChooseUsCard = ({ image, title, desc }) => {
  return (
    <div className="w-full dark:bg-[#055987] max-w-[360px] md:w-1/3 rounded-[10px]  border-[1px] border-primary-1 flex p-8 items-center justify-start flex-col h-auto relative overflow-hidden">
      <div className="w-3/5 mb-2 rounded-[5px] bg-[#AEE6FF] dark:bg-[#0A5679] py-2 h-20 flex items-center justify-center">
        <img src={image} alt="" className="w-16 h-full " />
      </div>
      <h3 className=" text-primary-1 mb-8 text-2xl font-bold text-center dark:text-white">
        {title}
      </h3>
      <p className="text-center text-sm text-primary-1 dark:text-white">
        {desc}
      </p>
    </div>
  );
};

const ChooseUs = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white dark:bg-[#055987]">
      <div
        data-aos="fade-up"
        className="mx-auto w-full max-w-6xl flex flex-col items-center justify-center"
      >
        <h3 className="text-section-heading font-bold text-2xl md:text-4xl dark:text-white">
          Why Choose Us?
        </h3>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8 md:mt-16 items-stretch justify-between ">
          <ChooseUsCard
            image={FlexibleProjectsImage}
            title={"Flexible Projects"}
            desc="Adaptable solutions tailored to your needs. We offer flexible Projects that can be customized to meet your unique requirements, ensuring optimal results for your business. We also collaborateclosely with you to deliver agile, cost-effective software solutions that align perfectly with your evolving business objectives."
          />
          <ChooseUsCard
            image={AffordablePricingImage}
            title={"Affordable Pricing"}
            desc="We provide affordable software solutions without compromising on quality, ensuring that you receive cost-effective products that meet your business needs and budget. Our goal is to make cutting-edge software accessible to businesses of all sizes, empowering you to thrive in the digital landscape without breaking the bank."
          />
          <ChooseUsCard
            image={CareerAdvancementImage}
            title={"Career Advancement"}
            desc="Our business-boosting services drive exponential growth, ensuring your success in a rapidly evolving digital landscape. We provide innovative software development services that keep you at the forefront of technology. Our solutions are tailored to meet your unique needs, ensuring you stay competitive and relevant."
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
