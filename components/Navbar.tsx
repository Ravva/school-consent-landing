import type React from "react";
import { useEffect, useState } from "react";
import type { NavLink } from "../types";
import { getLenis } from "../src/lenis";

const links: NavLink[] = [
	{ label: "Проблема", href: "#problem" },
	{ label: "Возможности", href: "#features" },
	{ label: "Технологии", href: "#tech" },
	{ label: "Статистика", href: "#stats" },
];

const Navbar: React.FC = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetId = href.substring(1);
		const targetElement = document.getElementById(targetId);
		const lenis = getLenis();
		if (targetElement && lenis) {
			const navbarHeight = 80;
			lenis.scrollTo(targetElement.offsetTop - navbarHeight);
		}
	};

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 py-5 ${scrolled ? "nav-blur" : "bg-transparent"}`}
		>
			<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
				<button
					className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
					onClick={() => {
						const lenis = getLenis();
						if (lenis) lenis.scrollTo(0);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							const lenis = getLenis();
							if (lenis) lenis.scrollTo(0);
						}
					}}
					aria-label="Перейти к началу страницы"
					type="button"
				>
					<div className="w-8 h-8 rounded-lg flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 100 100"
							className="w-8 h-8 rounded-lg"
							role="img"
							aria-label="Логотип Школьное Согласие"
						>
							<title>Логотип Школьное Согласие</title>
							<rect width="100" height="100" fill="#ff00ff" rx="12" />
							<text
								x="50"
								y="70"
								fontFamily="Arial, sans-serif"
								fontSize="60"
								fontWeight="bold"
								fill="white"
								textAnchor="middle"
							>
								Ш
							</text>
						</svg>
					</div>
					<span className="font-bold text-lg tracking-tight">
						Школьное Согласие
					</span>
				</button>

				<div className="hidden md:flex gap-8 text-sm font-medium text-textSecondary">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={(e) => handleLinkClick(e, link.href)}
							className="hover:text-primaryStart transition-colors duration-200"
						>
							{link.label}
						</a>
					))}
				</div>

				<a
					href="https://t.me/DSConsentBot"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-border hover:border-primaryStart hover:bg-white/10 transition-colors"
				>
					<i className="fa-brands fa-telegram text-xl text-primaryStart"></i>
					<span className="font-bold text-white tracking-wide">
						@DSConsentBot
					</span>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
