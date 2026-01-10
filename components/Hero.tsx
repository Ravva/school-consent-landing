import type React from "react";
import BlurText from "../src/BlurText";
import StarBorder from "../src/StarBorder";

const Hero: React.FC = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
			{/* Background Glow */}
			<div className="glow-blob w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
				{/* Badge */}
				<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/5 mb-6 animate-fade-in-up">
					<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
					<span className="text-xs font-mono text-primaryStart uppercase tracking-wider">
						ИТ Вертикаль 2026
					</span>
				</div>

				{/* Title */}
				<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-10 leading-[1.1]">
					<BlurText
						text="Бюрократия"
						delay={500}
						initialDelay={1000}
						animateBy="words"
						direction="top"
						animationFrom={{ filter: "blur(10px)", opacity: 0 }}
						animationTo={[{ filter: "blur(0px)", opacity: 1 }]}
					/>
					<br />
					<BlurText
						text="отменяется"
						delay={500}
						initialDelay={2000}
						animateBy="words"
						direction="top"
						itemClassName="text-gradient"
						animationFrom={{ filter: "blur(10px)", opacity: 0 }}
						animationTo={[{ filter: "blur(0px)", opacity: 1 }]}
					/>
				</h1>

				{/* Description */}
				<p
					className="text-lg md:text-xl lg:text-2xl text-textSecondary max-w-2xl mx-auto mb-16 leading-relaxed animate-fade-in-up"
					style={{ animationDelay: "0.2s" }}
				>
					Готовое решение для автоматизации сбора согласий родителей на участие
					детей в школьных мероприятиях через Telegram Mini App с использованием
					простой электронной подписи (ПЭП).
				</p>

				{/* Action Row: Buttons & Developed By Card */}
				<div
					className="relative flex flex-col lg:flex-row items-center justify-center gap-8 mb-12 animate-fade-in-up"
					style={{ animationDelay: "0.3s" }}
				>
					{/* Buttons */}
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						<button
							type="button"
							className="px-8 py-4 rounded-xl bg-gradient-to-r from-primaryStart to-primaryEnd text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
						>
							<span>Запустить Демо</span>
							<i className="fa-solid fa-arrow-right text-sm"></i>
						</button>
						<button
							type="button"
							className="px-8 py-4 rounded-xl border border-border bg-card text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2 justify-center group"
						>
							<i className="fa-brands fa-github group-hover:scale-110 transition-transform"></i>{" "}
							GitHub
						</button>
					</div>

					{/* Developed By Card */}
					<div className="flex justify-center lg:justify-end">
						<StarBorder thickness={2} color="#d946ef" speed="4s" className="max-w-md">
							<div className="bg-card/80 border border-white/10 rounded-2xl flex flex-col items-start p-6 text-left backdrop-blur-md hover:border-primaryStart/30 transition-colors">
								<div className="text-xs text-primaryStart font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
									<i className="fa-solid fa-code"></i> Разработано
								</div>
								<div className="flex flex-col gap-3">
									<div className="flex items-center gap-4">
										<div className="w-2 h-2 rounded-full bg-white/20"></div>
										<span className="text-sm lg:text-base text-gray-200">
											Ученик 8Ю класса{" "}
											<span className="font-bold text-white">Байрамов Эмиль</span>
										</span>
									</div>
									<div className="flex items-center gap-4">
										<div className="w-2 h-2 rounded-full bg-white/20"></div>
										<span className="text-sm lg:text-base text-gray-200">
											Руководитель:{" "}
											<span className="font-bold text-white">
												Стенин Алексей Владимирович
											</span>
										</span>
									</div>
								</div>
							</div>
						</StarBorder>
					</div>
				</div>

				{/* Coded Dashboard Mockup */}
				<div
					className="relative mx-auto max-w-5xl animate-fade-in-up"
					style={{ animationDelay: "0.4s" }}
				>
					<div className="rounded-xl overflow-hidden border border-border shadow-2xl iso-card bg-[#0F0F11] relative group p-1">
						{/* Dashboard Container */}
						<div className="bg-[#18181b] rounded-lg p-4 md:p-6 w-full text-left font-sans">
							{/* Header */}
							<h2 className="text-2xl md:text-3xl font-bold text-[#d946ef] mb-6">
								События
							</h2>

							{/* Stats Row */}
							<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
								{[
									{ label: "Событий", value: "7", color: "text-white" },
									{ label: "Согласий", value: "82", color: "text-green-500" },
									{ label: "Отказов", value: "26", color: "text-red-500" },
									{ label: "Ожидание", value: "21", color: "text-purple-400" },
									{ label: "Учеников", value: "69", color: "text-white" },
									{ label: "Родителей", value: "132", color: "text-white" },
									{ label: "Классов", value: "8", color: "text-white" },
								].map((stat) => (
									<div
										key={stat.label}
										className="bg-[#27272a] p-3 rounded-lg border border-white/5"
									>
										<div className="text-[10px] text-gray-400 mb-1">
											{stat.label}
										</div>
										<div
											className={`text-lg md:text-xl font-bold ${stat.color}`}
										>
											{stat.value}
										</div>
									</div>
								))}
							</div>

							{/* Controls */}
							<div className="flex justify-between items-center mb-6">
								<div className="px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-medium border border-green-500/20">
									Активные
								</div>
								<button
									type="button"
									className="px-4 py-2 rounded-lg bg-[#d946ef] text-white text-xs font-bold hover:bg-[#a855f7] transition-colors shadow-lg shadow-purple-500/20"
								>
									Создать событие
								</button>
							</div>

							{/* Table */}
							<div className="overflow-x-auto">
								<table className="w-full text-left text-sm text-gray-300">
									<thead>
										<tr className="border-b border-white/10 text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
											<th className="pb-4 pl-2 font-medium">Название</th>
											<th className="pb-4 font-medium hidden sm:table-cell">
												Дата
											</th>
											<th className="pb-4 font-medium hidden md:table-cell">
												Время
											</th>
											<th className="pb-4 font-medium">Классы</th>
											<th className="pb-4 font-medium text-center hidden sm:table-cell">
												Ученики
											</th>
											<th className="pb-4 font-medium text-center">Согласия</th>
											<th className="pb-4 font-medium text-right pr-2">
												Действия
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-white/5">
										{[
											{
												name: "Профориентационная экскурсия в IT-компанию",
												date: "05.02.26",
												time: "11:00",
												classes: "9А, 10Б, 11А",
												count: 38,
												consent: "9/38",
											},
											{
												name: 'Театральная постановка "Снежная королева"',
												date: "25.01.26",
												time: "14:00",
												classes: "6Б",
												count: 13,
												consent: "10/13",
											},
											{
												name: "Экскурсия в Планетарий",
												date: "20.01.26",
												time: "10:00",
												classes: "6А",
												count: 12,
												consent: "10/12",
											},
											{
												name: "Чемпионат по скоростному распутыванию гирлянд",
												date: "10.01.26",
												time: "21:05",
												classes: "8Ю, 7Ё",
												count: 5,
												consent: "3/5",
											},
										].map((row) => (
											<tr
												key={row.name}
												className="group hover:bg-white/5 transition-colors"
											>
												<td className="py-4 pl-2 font-medium text-white text-xs md:text-sm">
													{row.name}
												</td>
												<td className="py-4 text-xs hidden sm:table-cell text-gray-400">
													{row.date}
												</td>
												<td className="py-4 text-xs hidden md:table-cell text-gray-400">
													{row.time}
												</td>
												<td className="py-4">
													<span className="px-2 py-1 rounded bg-white/10 text-[10px] font-mono text-gray-300">
														{row.classes}
													</span>
												</td>
												<td className="py-4 text-center hidden sm:table-cell">
													<span className="px-2 py-0.5 rounded-full bg-[#d946ef] text-white text-[10px] font-bold">
														{row.count}
													</span>
												</td>
												<td className="py-4 text-center text-xs font-medium text-white">
													{row.consent}
												</td>
												<td className="py-4 text-right pr-2 space-x-3">
													<i className="fa-solid fa-pencil text-gray-500 hover:text-white cursor-pointer transition-colors text-xs"></i>
													<i className="fa-solid fa-trash text-gray-500 hover:text-red-500 cursor-pointer transition-colors text-xs"></i>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
