import React from "react";

const Hero = () => {
	return (
		<>
			<div className="bg-[#FFF2E1]  overflow-hidden">
				<div className="px-4  lg:pb-0 lg:px-0">
					<div className="grid grid-cols-12 lg:gap-3 container mx-auto">
						<div className="col-span-12 lg:col-span-6 order-2 lg:order-2 mx-auto">
							<img src="/assets/img/header-pic.svg" />
						</div>
						<div className="col-span-12 lg:col-span-6 order-1 lg:order-1 lg:my-auto ">
							<h1 className="text-4xl font-bold text-custom-dark-blue font-poppins leading-normal mt-5 text-center md:text-5xl md:mt-10 lg:text-start lg:px-0 lg:text-[54px] lg:leading-snug">
								<span className=" text-custom-orange">
									Studying{" "}
								</span>
								Online is now much easier
							</h1>
							<p className="text-[16px] text-[#464646] text-center px-10 my-4 md:text-xl md:px-52 lg:text-start lg:px-0 lg:my-10 lg:text-[24px] lg:pr-10">
								Skilline is an interesting platform that will
								teach you in more an interactive way
							</p>
							<div className="flex justify-center items-center md:mt-5 lg:justify-start">
								<button className="px-5 py-3 rounded-full font-poppins text-white font-semibold bg-custom-orange md:px-8 md:py-4 md:text-lg">
									Join for free
								</button>
								<button className="px-5 py-3 rounded-full font-poppins text-custom-dark-blue font-semibold md:px-8 md:py-4 md:text-lg">
									How its work
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[100px] mb-[160px] px-4 ">
				<h1 className="text-center font-poppins text-lg  text-[#696984] mb-5 md:text-2xl lg:mb-5 lg:text-4xl lg:my-20">
					Trusted by 5,000+ Companies Worldwide
				</h1>
				<div className="flex gap-5 w-[20rem] md:gap-10 flex-wrap justify-center items-center md:w-[40rem] mx-auto md:mt-10 lg:w-auto">
					<img src="/assets/img/netfilx.svg" className="h-6 md:h-8" />
					<img
						src="/assets/img/amazon.svg"
						className="h-6 md:h-8 lg:h-12"
					/>
					<img
						src="/assets/img/airbnb.svg"
						className="h-6 md:h-8 lg:h-12"
					/>
					<img
						src="/assets/img/google.svg"
						className="h-6 md:h-8 lg:h-12"
					/>
					<img
						src="/assets/img/grab.svg"
						className="h-6 md:h-8 lg:h-12"
					/>
					<img
						src="/assets/img/facebook.svg"
						className="h-6 md:h-8 lg:h-12"
					/>
				</div>
			</div>
		</>
	);
};

export default Hero;
