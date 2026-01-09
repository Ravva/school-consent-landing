import type React from "react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-12 border-t border-border bg-card">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
				<div className="flex items-center gap-3">
					<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
						<i className="fa-solid fa-code text-textSecondary text-xs"></i>
					</div>
					<div className="text-sm text-textSecondary">
						Цифровая Школа МГПУ {currentYear}
					</div>
				</div>

				<a
					href="https://t.me/DSConsentBot"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-border hover:border-primaryStart hover:bg-white/10 transition-all group"
				>
					<i className="fa-brands fa-telegram text-xl text-primaryStart group-hover:scale-110 transition-transform"></i>
					<span className="font-bold text-white tracking-wide">
						@DSConsentBot
					</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
