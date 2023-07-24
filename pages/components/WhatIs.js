import React from "react";

const WhatIs = () => {
	return (
		<div className="px-4 pt-[160px] pb-96">
			<div>
				<h1 className="text-custom-dark-blue text-center text-2xl mb-2 font-poppins font-bold md:text-2xl lg:text-4xl lg:mt-20">
					What is{" "}
					<span className="text-custom-orange">Skilline?</span>
				</h1>
				<p className="text-center text-[#696984] font-poppins px-5 md:text-lg lg:text-2xl md:w-[32rem] md:mb-20 lg:mt-5 lg:w-[65rem] mx-auto">
					Skilline is a platform that allows educators to create
					online classes whereby they can store the course materials
					online, manage assignments, quizzes and exams. Monitor due
					dates, grade results and provide students with feedback all
					in one place.
				</p>
			</div>
			<div className="mt-10 flex flex-col lg:flex-row gap-5 lg:gap-20 container mx-auto justify-center">
				<div className="relative">
					<img src="/assets/img/group2.svg" className="" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
						<h1 className="font-poppins font-semibold text-white text-[32px] uppercase">
							for instructors
						</h1>
						<button className="py-6 px-9 border border-white rounded-full font-poppins text-white text-lg block mx-auto">
							Start a class today
						</button>
					</div>
				</div>
				<div className="relative">
					<img src="/assets/img/group1.svg" className="" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
						<h1 className="font-poppins font-semibold text-white text-[32px] uppercase">
							for students
						</h1>
						<button className="py-6 px-9 rounded-full font-poppins text-white text-lg block mx-auto bg-[#23BDEE] op4">
							Enter a class today
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatIs;
