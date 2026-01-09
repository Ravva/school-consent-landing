import type React from "react";
import type { StatItem } from "../types";

const stats: StatItem[] = [
	{ value: "15k+", label: "Строк кода" },
	{ value: "50+", label: "Компонентов" },
	{ value: "25+", label: "Таблиц БД" },
	{ value: "20+", label: "API Endpoints" },
];

const Stats: React.FC = () => {
	return (
		<section id="stats" className="py-32 relative">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="p-6 hover:bg-white/5 rounded-2xl transition-colors"
						>
							<div className="text-4xl md:text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primaryStart to-primaryEnd mb-2">
								{stat.value}
							</div>
							<div className="text-textSecondary uppercase tracking-widest text-xs md:text-sm">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
