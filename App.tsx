import type React from "react";
import { useEffect } from "react";
import { initLenis } from "./src/lenis";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProblemSolution from "./components/ProblemSolution";
import Stats from "./components/Stats";
import TechStack from "./components/TechStack";
import ThankYou from "./components/ThankYou";

const App: React.FC = () => {
	useEffect(() => {
		const lenis = initLenis();

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<div className="antialiased min-h-screen bg-background text-textPrimary selection:bg-primaryStart selection:text-white">
			<Navbar />
			<main>
				<Hero />
				<ProblemSolution />
				<Features />
				<TechStack />
				<Stats />
				<ThankYou />
			</main>
			<Footer />
		</div>
	);
};

export default App;
