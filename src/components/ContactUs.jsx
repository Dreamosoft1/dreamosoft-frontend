import React from "react";

const ContactUs = () => {
	return (
		<section className="w-full py-12 md:py-24 px-4">
			<div className="w-full flex flex-col items-center justify-center">
				<h3 className="text-3xl font-bold text-section-heading mb-6">Contact Us</h3>
				<div className="flex items-center justify-center gap-3">
					<span className="w-10 md:w-20 h-[4px] rounded-full shadow-xl bg-section-label"></span>
					<p className="text-section-label text-sm md:text-[16px]">Message Us and We Will Get Back To You</p>
					<span className="w-10 md:w-20 h-[4px] rounded-full shadow-xl bg-section-label"></span>
				</div>

				<form action="" className="w-full mt-12 md:mt-24 max-w-3xl mx-auto">
					<div className="w-full">
						<input
							type="text"
							className="w-full bg-[#B7DBEB] rounded-[5px] py-3 border-[1px] border-[#00CB5157] !focus:outline-0"
							placeholder="Enter Full Name"
							aria-label="Enter Full Name"
						/>
					</div>
					<div className="flex items-center w-full gap-4 mt-4 md:mt-8">
						<div className="w-full">
							<input
								type="text"
								className="w-full bg-[#B7DBEB] rounded-[5px] py-3 border-[1px] border-[#00CB5157] !focus:outline-0"
								placeholder="Enter Email Address"
								aria-label="Enter Email Address "
							/>
						</div>
						<div className="w-full">
							<input
								type="text"
								className="w-full bg-[#B7DBEB] rounded-[5px] py-3 border-[1px] border-[#00CB5157] !focus:outline-0"
								placeholder="Enter Phone Number"
								aria-label="Enter Phone Number"
							/>
						</div>
					</div>
					<div className="w-full mt-4 md:mt-8">
						<textarea
							type="text"
							className="w-full bg-[#B7DBEB] h-48 md:h-64 resize-none rounded-[5px] py-3 border-[1px] border-[#00CB5157] focus:outline-0"
							placeholder="Type your Message"
							aria-label="Type your Message"></textarea>
					</div>
					<div></div>
				</form>
			</div>
		</section>
	);
};

export default ContactUs;
