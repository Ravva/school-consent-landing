import type React from "react";
import type { TechItem } from "../types";

const TailwindLogo = ({ className }: { className?: string }) => (
	<svg
		viewBox="0 0 54 33"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
	</svg>
);

const SupabaseLogo = ({ className }: { className?: string }) => (
	<svg
		viewBox="0 0 109 113"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
			fill="url(#paint0_linear)"
		/>
		<path
			d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
			fill="url(#paint1_linear)"
			fillOpacity="0.2"
		/>
		<path
			d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
			fill="#3ECF8E"
		/>
		<defs>
			<linearGradient
				id="paint0_linear"
				x1="53.9738"
				y1="54.974"
				x2="94.1635"
				y2="71.8295"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#249361" />
				<stop offset="1" stopColor="#3ECF8E" />
			</linearGradient>
			<linearGradient
				id="paint1_linear"
				x1="36.1558"
				y1="30.578"
				x2="54.4844"
				y2="65.0806"
				gradientUnits="userSpaceOnUse"
			>
				<stop />
				<stop offset="1" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
);

const techItems: TechItem[] = [
	{
		iconClass: "fa-brands fa-react",
		name: "React 19",
		description: "Next.js 16.1 App Router",
		colorClass: "text-blue-400",
	},
	{
		svg: (
			<SupabaseLogo className="w-[48px] h-[48px] mb-6 group-hover:scale-110 transition-transform duration-300" />
		),
		name: "Supabase",
		description: "PostgreSQL & RLS",
		colorClass: "text-green-400",
	},
	{
		svg: (
			<TailwindLogo className="w-[48px] h-[30px] mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
		),
		name: "Tailwind CSS 4",
		description: "Plasma Design System",
		colorClass: "text-cyan-400",
	},
	{
		iconClass: "fa-brands fa-telegram",
		name: "Telegram SDK",
		description: "Mini App Integration",
		colorClass: "text-blue-500",
	},
];

const TechStack: React.FC = () => {
	return (
		<section id="tech" className="py-32 bg-white/5 border-y border-border">
			<div className="max-w-7xl mx-auto px-6 text-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-16">
					Стек технологий
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{techItems.map((item) => (
						<div
							key={item.name}
							className="p-8 rounded-2xl bg-card border border-border hover:border-primaryStart transition-colors group flex flex-col items-center"
						>
							{item.svg ? (
								item.svg
							) : (
								<i
									className={`${item.iconClass} text-5xl mb-6 ${item.colorClass} group-hover:scale-110 transition-transform duration-300`}
								></i>
							)}
							<h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
							<p className="text-sm text-textSecondary font-mono">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
