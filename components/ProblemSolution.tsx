import type React from "react";
import Magnet from "../src/Magnet";

const ProblemSolution: React.FC = () => {
	return (
		<section id="problem" className="py-24 relative">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					{/* Problem Card */}
					<Magnet magnetStrength={3} wrapperClassName="w-full">
						<div className="p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-red-500/30 transition-colors group relative overflow-hidden flex flex-col h-[350px]">
							<div className="absolute top-0 right-0 p-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>

							<div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<i className="fa-regular fa-file-lines text-2xl text-red-500"></i>
							</div>
							<h3 className="text-3xl font-bold mb-4 text-white">Проблема</h3>
							<p className="text-lg text-textSecondary leading-relaxed flex-grow">
								Классные руководители тратят слишком много времени на печать,
								раздачу и ручной сбор бумажных согласий. Потеря бланков создает
								юридические риски для школы.
							</p>
						</div>
					</Magnet>

					{/* Solution Card */}
					<Magnet magnetStrength={3} wrapperClassName="w-full">
						<div className="p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-green-500/30 transition-colors group relative overflow-hidden flex flex-col h-[350px]">
							<div className="absolute top-0 right-0 p-32 bg-green-500/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>

							<div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<i className="fa-brands fa-telegram text-2xl text-green-500"></i>
							</div>
							<h3 className="text-3xl font-bold mb-4 text-white">Решение</h3>
							<p className="text-lg text-textSecondary leading-relaxed flex-grow">
								Автоматизированная система внутри Telegram. Использование ПЭП
								согласно ФЗ-63 "Об электронной подписи" превращает нажатие кнопки
								в юридически значимый документ.
							</p>
						</div>
					</Magnet>
				</div>
			</div>
		</section>
	);
};

export default ProblemSolution;
