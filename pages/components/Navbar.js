import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="w-full py-10 px-4 bg-[#FFF2E1]">
			<div className="container mx-auto flex justify-between items-center">
				<Link
					href="/"
					className="font-poppins font-bold text-xl text-[#113C49] flex items-center cursor-pointer"
				>
					<img
						src="/assets/img/polygon.svg"
						width={50}
						className=""
					/>
					<span className="-ml-8 tracking-wide">Skilline</span>
				</Link>
				<div className="flex flex-row gap-10 items-center">
					<div className="hidden lg:block">
						<ul className="flex flex-row gap-20 font-poppins text-xl ">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Career</a>
							</li>
							<li>
								<a href="/">Blog</a>
							</li>
							<li>
								<a href="/">About us</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-row gap-4">
						<button className="h-14 w-32 bg-[#fff] font-poppins text-custom-orange font-semibold rounded-full hidden lg:block">
							Login
						</button>
						<button className="h-14 w-32 bg-custom-orange font-poppins text-lg text-white font-semibold rounded-full hidden lg:block">
							Sign Up
						</button>
					</div>
					<div className="p-6 rounded-lg bg-custom-orange lg:hidden"></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
