import React from "react";

const ServiceCard = ({ image, text }) => {
	return (
		<div className="w-full card rounded-[10px] bg-[#055987] flex pb-3 items-center justify-center flex-col h-44 md:h-64 relative overflow-hidden">
			<div className="absolute w-[90%] h-[150px] md:h-[300px] bg-[#6599B740] rounded-full -top-[100px] md:-top-[200px] left-0 right-0 mx-auto"></div>

			<div className="w-16 md:w-24 h-16 md:h-24 flex items-center justify-center mt-6 md:mt-12">
				<img src={image} alt="" className="w-16 md:w-24 h-12 md;h-20" />
			</div>
			<h3 className="mt-auto text-white text-xl md:text-2xl font-bold text-center" dangerouslySetInnerHTML={{ __html: text }}></h3>
		</div>
	);
};

export default ServiceCard;
