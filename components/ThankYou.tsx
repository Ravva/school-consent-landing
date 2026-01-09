import type React from "react";

const ThankYou: React.FC = () => {
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
				<h1
					className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-10 leading-[1.1] animate-fade-in-up"
					style={{ animationDelay: "0.1s" }}
				>
					Спасибо за внимание! <br />
					<span className="text-gradient">Вопросы?</span>
				</h1>

				{/* Description */}
				<p
					className="text-lg md:text-xl lg:text-2xl text-textSecondary max-w-2xl mx-auto mb-16 leading-relaxed animate-fade-in-up"
					style={{ animationDelay: "0.2s" }}
				>
					Создано с применением новейших технологий разработки веб-приложений с использованием Искуственного интеллекта. 
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
						<div className="inline-flex flex-col items-start bg-card/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:border-primaryStart/30 transition-colors text-left max-w-md">
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThankYou;
