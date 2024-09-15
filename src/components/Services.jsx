import ServiceCard from "./ServiceCard";

import DesignImage from "../assets/img/design.png";
import MachineImage from "../assets/img/machine_learning.png";
import SoftwareDevImage from "../assets/img/software_dev.png";
import WebsiteDevImage from "../assets/img/web_dev.png";
import DataAnalysisImage from "../assets/img/data_analysis.png";

const Services = () => {
	return (
		<section className="w-full h-auto py-12 md:py-24 px-4">
			<div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
				<h3 className="font-bold text-3xl text-section-heading mb-2">Popular Services</h3>
				<div className="flex items-center justify-center gap-[6px] md:gap-3">
					<span className="w-8 md:w-20 h-[4px] rounded-full shadow-xl bg-section-label"></span>
					<p className="text-[13px] text-center md:text-[16px] text-section-label">Experience our excellence through our services</p>
					<span className="w-8 md:w-20 h-[4px] rounded-full shadow-xl bg-section-label"></span>
				</div>

				<div className="w-full grid services grid-cols-4 md:grid-cols-6 mt-12 items-center gap-4 md:gap-24 justify-center">
					<ServiceCard text={"Software <br/> Development"} image={SoftwareDevImage} />
					<ServiceCard text={`Website <br/> Development`} image={WebsiteDevImage} />
					<ServiceCard text={"Data <br/> Analysis"} image={DataAnalysisImage} />
					<ServiceCard text={`UI/UX <br/> Design`} image={DesignImage} />
					<ServiceCard text={"Machine <br/> Learning Projects"} image={MachineImage} />
				</div>
				{/* <div className="w-full flex items-center  gap-24 mt-24 justify-center">
				</div> */}
			</div>
		</section>
	);
};

export default Services;
