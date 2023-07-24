import React from "react";

const AllInOne = () => {
	return (
		<div className="px-4 ">
			<div>
				<h1 className="text-custom-dark-blue text-center text-xl mb-2 font-poppins font-bold md:text-2xl lg:text-4xl lg:mt-20">
					All-In-One{" "}
					<span className="text-custom-orange">Cloud Software.</span>
				</h1>
				<p className="text-center text-[#696984] font-poppins px-5 md:text-lg lg:text-2xl md:w-[32rem] md:mb-20 lg:mt-5 lg:w-[45rem] mx-auto">
					Skilline is one powerful online software suite that combines
					all the tools needed to run a successful school or office.
				</p>
			</div>
			<div className="mt-10 flex flex-col lg:flex-row gap-20 items-center justify-center lg:container lg:mx-auto lg:mt-[103px]">
				<div className="w-[23rem] lg:w-auto rounded-2xl shadow-lg border text-center pb-10">
					<img
						src="/assets/img/excel.svg"
						className="h-32 mx-auto -mt-[54px] md:h-36 md:-mt-[62px] lg:h-40 lg:-mt-[72px]"
					/>
					<h1 className="text-custom-dark-blue text-lg font-semibold leading-relaxed font-poppins md:text-xl lg:text-2xl">
						Online Billing,
						<br /> Invoicing, & Contracts
					</h1>
					<p className="px-5 mt-3 text-[#696984] font-poppins pb-5 font-extralight md:text-lg lg:text-xl lg:px-14">
						Simple and secure control of your organization’s
						financial and legal transactions. Send customized
						invoices and contracts
					</p>
				</div>
				<div className="w-[23rem] lg:w-auto rounded-2xl shadow-lg border text-center pb-10">
					<img
						src="/assets/img/calendar.svg"
						className="h-32 mx-auto -mt-[54px] md:h-36 md:-mt-[62px] lg:h-40 lg:-mt-[72px]"
					/>
					<h1 className="text-custom-dark-blue text-lg font-semibold leading-relaxed font-poppins md:text-xl lg:text-2xl">
						Online Billing,
						<br /> Invoicing, & Contracts
					</h1>
					<p className="px-5 mt-3 text-[#696984] font-poppins pb-5 font-extralight md:text-lg lg:text-xl lg:px-14">
						Simple and secure control of your organization’s
						financial and legal transactions. Send customized
						invoices and contracts
					</p>
				</div>
				<div className="w-[23rem] lg:w-auto rounded-2xl shadow-lg border text-center pb-10">
					<img
						src="/assets/img/people.svg"
						className="h-32 mx-auto -mt-[54px] md:h-36 md:-mt-[62px] lg:h-40 lg:-mt-[72px]"
					/>
					<h1 className="text-custom-dark-blue text-lg font-semibold leading-relaxed font-poppins md:text-xl lg:text-2xl">
						Online Billing,
						<br /> Invoicing, & Contracts
					</h1>
					<p className="px-5 mt-3 text-[#696984] font-poppins pb-5 font-extralight md:text-lg lg:text-xl lg:px-14">
						Simple and secure control of your organization’s
						financial and legal transactions. Send customized
						invoices and contracts
					</p>
				</div>
			</div>
		</div>
	);
};

export default AllInOne;
