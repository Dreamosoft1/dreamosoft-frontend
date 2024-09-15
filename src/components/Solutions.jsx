import solutions from "../data/solutions";

const Solutions = () => {
	return (
		<div className="w-full py-24  bg-[#F5F6FB] ">
			<div className="max-w-6xl mx-auto flex flex-col  items-center justify-center w-full">
				<h3 className="text-4xl text-[#15572A] font-semibold">Custom Industry Solutions</h3>

				<div className="w-full grid mt-16 md:grid-cols-4 gap-6">
					{solutions?.map((solution, index) => (
						<div key={index} className="w-full border-[1px] border-desc p-4 rounded-[10px]">
							<div className="w-12 h-12 bg-[red] mx-auto"></div>
							<h3 className="mt-6 h-14  text-title text-xl font-semibold mb-3">{solution.title}</h3>
							<p className="text-sm text-desc">{solution.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Solutions;
