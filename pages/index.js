import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllInOne from "./components/AllInOne";
import WhatIs from "./components/WhatIs";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<AllInOne />
			<WhatIs />
		</>
	);
}
