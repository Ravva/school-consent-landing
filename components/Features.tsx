import type React from "react";

const Features: React.FC = () => {
	return (
		<section id="features" className="py-20 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 space-y-32">
				{/* Feature 1: Teacher Dashboard */}
				<div className="flex flex-col md:flex-row items-center gap-16 group">
					<div className="w-full md:w-1/2 order-2 md:order-1 relative">
						<div className="absolute -inset-4 bg-primaryStart/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
						{/* Isometric Container */}
						<div className="relative rounded-2xl overflow-hidden border border-border bg-[#0F0F11] transition-all duration-700 ease-out [transform:perspective(1000px)_rotateX(15deg)_rotateY(30deg)_rotateZ(-5deg)] shadow-[50px_30px_80px_rgba(0,0,0,0.5)] group-hover:[transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] group-hover:shadow-2xl hover:z-50">
							{/* Coded Event Constructor Form Mockup */}
							<div className="w-full bg-[#121214] p-4 sm:p-6 font-sans text-sm relative">
								{/* Header */}
								<h3 className="text-xl sm:text-2xl font-bold text-[#d946ef] mb-1">
									Создать событие
								</h3>
								<p className="text-gray-500 text-xs mb-6">
									Заполните форму для создания нового события
								</p>

								{/* Form Grid */}
								<div className="space-y-4">
									{/* Event Name */}
									<div>
										<label className="block text-xs font-bold text-white mb-1.5">
											Название события*
										</label>
										<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2.5 text-gray-500 text-xs">
											Например: Экскурсия в музей
										</div>
									</div>

									{/* Row: Place/Duration/Desc & Class Dropdown */}
									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-4">
											<div className="grid grid-cols-2 gap-2">
												<div>
													<label className="block text-xs font-bold text-white mb-1.5">
														Место
													</label>
													<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg h-9"></div>
												</div>
												<div>
													<label className="block text-xs font-bold text-white mb-1.5 truncate">
														Продолжительность, ч.
													</label>
													<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg h-9"></div>
												</div>
											</div>
											<div>
												<label className="block text-xs font-bold text-white mb-1.5">
													Описание
												</label>
												<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2.5 h-20 text-gray-600 text-xs">
													Подробное описание события...
												</div>
											</div>
										</div>

										{/* Dropdown Section */}
										<div className="relative">
											<label className="block text-xs font-bold text-white mb-1.5">
												Класс(ы)
											</label>
											<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2.5 flex justify-between items-center text-white text-xs mb-1">
												<span>Выберите классы</span>
												<i className="fa-solid fa-chevron-down text-gray-500"></i>
											</div>

											{/* Dropdown Menu Mockup */}
											<div className="absolute top-[60px] right-0 left-0 bg-[#1c1c1e] border border-white/10 rounded-xl shadow-2xl z-20 p-1 flex flex-col gap-0.5 max-h-[180px] overflow-hidden">
												{["10Б", "11А", "5А", "6А", "6Б", "7Ё"].map((cls) => (
													<div
														key={cls}
														className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded-lg cursor-pointer group/item"
													>
														<div className="w-3.5 h-3.5 rounded-full border border-pink-500/50 group-hover/item:border-pink-500 transition-colors"></div>
														<span className="text-white text-xs">{cls}</span>
													</div>
												))}
												<div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg cursor-pointer">
													<div className="w-3.5 h-3.5 rounded-full bg-gray-500 flex items-center justify-center border border-gray-500">
														<div className="w-1.5 h-1.5 bg-black rounded-full opacity-50"></div>
													</div>
													<span className="text-white text-xs">8Ю</span>
												</div>
												<div className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded-lg cursor-pointer">
													<div className="w-3.5 h-3.5 rounded-full border border-pink-500/50"></div>
													<span className="text-white text-xs">9А</span>
												</div>
											</div>
										</div>
									</div>

									{/* Date inputs row */}
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-xs font-bold text-white mb-1.5">
												Дата и время мероприятия*
											</label>
											<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2.5 flex items-center gap-2 text-gray-500 text-xs truncate">
												<i className="fa-regular fa-calendar"></i>
												<span>Выберите дату и время</span>
											</div>
										</div>
										<div>
											<label className="block text-xs font-bold text-white mb-1.5">
												Дата и время дедлайна*
											</label>
											<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2.5 flex items-center gap-2 text-gray-500 text-xs truncate">
												<i className="fa-regular fa-calendar"></i>
												<span>Выберите дату и время</span>
											</div>
										</div>
									</div>

									{/* Checkbox */}
									<div className="flex items-center justify-end gap-2">
										<span className="text-xs font-bold text-white">
											Уведомить при создании
										</span>
										<div className="w-4 h-4 bg-[#d946ef] rounded flex items-center justify-center shadow shadow-purple-500/50">
											<i className="fa-solid fa-check text-white text-[10px]"></i>
										</div>
									</div>

									{/* Chaperones Header */}
									<div className="flex items-center gap-2 mt-2">
										<h4 className="font-bold text-white text-sm">
											Сопровождающие
										</h4>
										<button className="w-6 h-6 rounded bg-[#d946ef] flex items-center justify-center text-white text-xs shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform">
											+
										</button>
									</div>

									{/* Chaperone Card */}
									<div className="border border-white/10 rounded-lg p-3 bg-[#18181b]/50">
										<div className="flex justify-between items-center mb-3">
											<div className="text-xs font-bold text-white">
												Сопровождающий 1
											</div>
											<div className="w-6 h-6 rounded bg-[#2a1b1b] flex items-center justify-center text-red-500 text-xs border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-colors">
												<i className="fa-solid fa-trash-can"></i>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-3 mb-3">
											<div>
												<label className="block text-[10px] font-bold text-white mb-1">
													Поиск по контактам
												</label>
												<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2 flex justify-between items-center h-8">
													<span className="text-gray-500 text-[10px]"></span>
													<i className="fa-solid fa-xmark text-gray-500 text-[10px]"></i>
												</div>
											</div>
											<div>
												<label className="block text-[10px] font-bold text-white mb-1">
													Или введите имя вручную
												</label>
												<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2 text-gray-300 text-[10px] h-8 flex items-center">
													Иванов Иван Иванович
												</div>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-3">
											<div>
												<label className="block text-[10px] font-bold text-white mb-1">
													Телефон
												</label>
												<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2 text-gray-400 text-[10px] h-8 flex items-center">
													+79991234567
												</div>
											</div>
											<div>
												<label className="block text-[10px] font-bold text-white mb-1">
													Telegram
												</label>
												<div className="w-full bg-[#1c1c1e] border border-white/10 rounded-lg p-2 text-gray-400 text-[10px] h-8 flex items-center">
													@username
												</div>
											</div>
										</div>
									</div>

									{/* Footer Actions */}
									<div className="flex justify-end gap-3 pt-4">
										<button className="px-4 py-2 rounded-lg bg-[#27272a] text-white text-xs font-bold border border-white/10 hover:bg-white/10 transition-colors">
											Отмена
										</button>
										<button className="px-4 py-2 rounded-lg bg-[#d946ef] text-white text-xs font-bold shadow-lg shadow-purple-500/20 hover:bg-[#a855f7] transition-colors">
											Создать событие
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 order-1 md:order-2">
						<div className="text-sm font-mono text-primaryStart mb-4 tracking-wider">
							для классных руководителей
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Создание события за{" "}
							<span className="text-gradient">2 минуты</span>
						</h2>
						<ul className="space-y-6">
							{[
								"Простая и понятная форма создания события.",
								"Настройка умных напоминаний для родителей, которые еще не приняли решение.",
								"Удобный импорт списка класса и родителей из Excel.",
							].map((item, idx) => (
								<li key={idx} className="flex items-start gap-4">
									<div className="mt-1 w-6 h-6 rounded-full bg-primaryStart/10 flex items-center justify-center flex-shrink-0">
										<i className="fa-solid fa-check text-primaryStart text-xs"></i>
									</div>
									<span className="text-lg text-textSecondary">{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Feature 2: Parent Experience */}
				<div className="flex flex-col md:flex-row items-center gap-16">
					<div className="w-full md:w-1/2">
						<div className="text-sm font-mono text-primaryStart mb-4 tracking-wider">
							для родителей
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Все в телефоне. <br />
							<span className="text-gradient">Без бумаг.</span>
						</h2>
						<ul className="space-y-4 mb-8">
							<li className="flex items-start gap-4">
								<div className="mt-1 w-6 h-6 rounded-full bg-primaryStart/10 flex items-center justify-center flex-shrink-0">
									<i className="fa-solid fa-check text-primaryStart text-xs"></i>
								</div>
								<span className="text-textSecondary">
									Мгновенное уведомление в Telegram при создании события
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="mt-1 w-6 h-6 rounded-full bg-primaryStart/10 flex items-center justify-center flex-shrink-0">
									<i className="fa-solid fa-check text-primaryStart text-xs"></i>
								</div>
								<span className="text-textSecondary">
									Напоминания о необходимости принять решения приходят в личные
									сообщения
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="mt-1 w-6 h-6 rounded-full bg-primaryStart/10 flex items-center justify-center flex-shrink-0">
									<i className="fa-solid fa-check text-primaryStart text-xs"></i>
								</div>
								<span className="text-textSecondary">
									Больше никаких "потерянных листочков" на дне рюкзака
								</span>
							</li>
						</ul>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="p-6 rounded-2xl bg-card border border-border hover:bg-white/5 transition-colors">
								<i className="fa-solid fa-bell text-2xl mb-4 text-white"></i>
								<h4 className="font-bold text-white mb-2">Push-уведомления</h4>
								<p className="text-sm text-textSecondary">
									Мгновенная доставка информации.
								</p>
							</div>
							<div className="p-6 rounded-2xl bg-card border border-border hover:bg-white/5 transition-colors">
								<i className="fa-solid fa-signature text-2xl mb-4 text-white"></i>
								<h4 className="font-bold text-white mb-2">Юридическая сила</h4>
								<p className="text-sm text-textSecondary">
									Выдача согласия идентична подписи.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 flex justify-center relative">
						<div className="absolute w-64 h-64 bg-primaryEnd/20 blur-[100px]"></div>
						{/* Mobile Mockup with Real Screenshot Recreation */}
						<div className="relative w-[300px] h-[600px] bg-[#111] rounded-[40px] border-[8px] border-[#2a2a2a] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 font-sans">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-[#2a2a2a] rounded-b-xl z-20"></div>

							{/* App Header */}
							<div className="bg-[#18181b] px-4 pt-8 pb-3 flex justify-between items-center border-b border-white/5 z-10 relative">
								<div className="flex items-center gap-2">
									<span className="text-white font-bold text-lg">
										DSConsentBot
									</span>
								</div>
								<div className="flex gap-4 text-gray-400">
									<i className="fa-solid fa-ellipsis-vertical cursor-pointer hover:text-white"></i>
									<i className="fa-solid fa-xmark cursor-pointer hover:text-white"></i>
								</div>
							</div>

							{/* Content Container */}
							<div className="bg-[#0F0F11] h-full overflow-y-auto pb-20 relative scrollbar-hide">
								<style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
								{/* Purple Glow Top */}
								<div className="absolute top-0 left-0 right-0 h-32 bg-purple-600/10 blur-3xl pointer-events-none"></div>

								{/* Tabs */}
								<div className="flex px-4 py-3 gap-5 overflow-x-auto text-sm font-medium border-b border-white/5 relative z-10">
									<span className="text-white border-b-2 border-[#d946ef] pb-2 whitespace-nowrap cursor-pointer">
										События
									</span>
									<span className="text-gray-500 pb-2 whitespace-nowrap cursor-pointer hover:text-gray-300">
										Классы
									</span>
									<span className="text-gray-500 pb-2 whitespace-nowrap cursor-pointer hover:text-gray-300">
										Бот
									</span>
									<span className="text-gray-500 pb-2 whitespace-nowrap cursor-pointer hover:text-gray-300">
										Пользователи
									</span>
								</div>

								{/* Main Card */}
								<div className="p-4 relative z-0">
									<div className="bg-[#18181b] rounded-xl p-4 border border-white/5 relative overflow-hidden">
										{/* Avatar Badge */}
										<div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#d946ef] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-purple-500/20">
											CA
										</div>

										<div className="text-xs text-gray-400 mb-2">Описание:</div>
										<div className="text-[11px] text-gray-200 leading-relaxed mb-5 space-y-2">
											<p>
												<span className="font-bold text-white">
													Суть события:
												</span>{" "}
												Участникам выдаются абсолютно одинаковые по длине
												гирлянды, которые организаторы предварительно превратили
												в максимально безнадежные узлы.
											</p>
											<p>
												<span className="font-bold text-white">
													Правила и фишки:
												</span>{" "}
												Спортивные категории: «Индивидуальный зачет» и «Парное
												фигурное распутывание».
											</p>
											<p>
												<span className="font-bold text-white">Штрафы:</span> За
												использование ножниц или нецензурную лексику в адрес
												лампочек начисляются штрафные секунды.
											</p>
											<p>
												<span className="font-bold text-white">Приз:</span>{" "}
												Победитель получает титул «Мастер железных нервов» и
												право первым запустить салют.
											</p>
										</div>

										<div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
											<i className="fa-solid fa-user-group text-purple-400"></i>
											<span>Сопровождающие:</span>
										</div>

										{/* Chaperone 1 (Fake) */}
										<div className="bg-[#0F0F11] rounded-lg p-3 mb-2 border border-white/5 flex flex-col justify-center">
											<div className="text-xs font-bold text-white mb-0.5">
												Петрова Анна Ивановна
											</div>
											<div className="text-[10px] text-gray-500">
												Telegram:{" "}
												<a
													href="https://t.me/anna_petrova"
													className="text-primaryStart hover:underline"
													target="_blank"
													rel="noopener noreferrer"
												>
													@anna_petrova
												</a>
											</div>
										</div>

										{/* Chaperone 2 (Fake) */}
										<div className="bg-[#0F0F11] rounded-lg p-3 mb-5 border border-white/5 flex flex-col justify-center">
											<div className="text-xs font-bold text-white mb-0.5">
												Сидоров Иван Петрович
											</div>
											<div className="text-[10px] text-gray-500">
												Telegram:{" "}
												<a
													href="https://t.me/ivan_sidorov"
													className="text-primaryStart hover:underline"
													target="_blank"
													rel="noopener noreferrer"
												>
													@ivan_sidorov
												</a>
											</div>
										</div>

										<div className="flex items-center gap-2 text-xs mb-1">
											<i className="fa-regular fa-clock text-red-400"></i>
											<span className="text-gray-400">Дедлайн ответа:</span>
										</div>
										<div className="text-sm font-bold text-white">
											09.01.26, 19:00
										</div>
									</div>
								</div>

								{/* Buttons */}
								<div className="px-4 pb-4 space-y-2.5">
									<button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d946ef] to-[#c026d3] text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all">
										Даю согласие
									</button>
									<button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#f87171] to-[#ef4444] text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(248,113,113,0.3)] transition-all">
										Отказываюсь
									</button>
								</div>

								{/* Footer */}
								<div className="text-center text-[10px] text-gray-500 pb-8 pt-2">
									@DSConsentBot
								</div>

								{/* Bottom Purple Glow */}
								<div className="absolute bottom-0 left-0 right-0 h-40 bg-purple-600/5 blur-3xl pointer-events-none"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Feature 3: Monitoring */}
				<div className="flex flex-col md:flex-row items-center gap-16 group">
					<div className="w-full md:w-1/2 order-2 md:order-1 relative">
						<div className="absolute -inset-4 bg-primaryStart/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
						{/* Isometric Container - Mirroring Feature 1 */}
						<div className="relative rounded-2xl overflow-hidden border border-border bg-[#0F0F11] transition-all duration-700 ease-out [transform:perspective(1000px)_rotateX(15deg)_rotateY(30deg)_rotateZ(-5deg)] shadow-[50px_30px_80px_rgba(0,0,0,0.5)] group-hover:[transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] group-hover:shadow-2xl hover:z-50 font-sans h-[500px] overflow-hidden">
							{/* Dashboard Header */}
							<div className="bg-[#18181b] p-3 flex justify-between items-center border-b border-white/5">
								<div className="text-xs font-bold text-[#d946ef] truncate max-w-[90%]">
									Согласия: Профориентационная экскурсия в IT-компанию
								</div>
								<i className="fa-solid fa-xmark text-gray-500 text-xs cursor-pointer hover:text-white"></i>
							</div>

							{/* Dashboard Content */}
							<div className="p-3 md:p-4 overflow-y-auto h-full pb-16 custom-scrollbar bg-[#121214]">
								<style>{`
                      .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                      .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
                   `}</style>

								{/* Class 9A Section */}
								<div className="mb-6">
									<div className="text-sm font-bold text-white mb-3 pl-1">
										9А
									</div>
									<div className="w-full overflow-x-auto">
										<div className="min-w-[600px]">
											{/* Table Header */}
											<div className="grid grid-cols-[1.5fr_2fr_1fr_0.8fr] gap-2 px-2 pb-2 text-[10px] text-gray-500 uppercase font-bold border-b border-white/5 mb-1 relative">
												<div>Ученик</div>
												<div>Родители</div>
												<div>Дедлайн</div>
												<div className="text-center sticky right-0 bg-[#121214] z-10 shadow-[-5px_0_10px_rgba(0,0,0,0.5)]">
													Согласие
												</div>
											</div>
											{/* Rows */}
											{[
												{
													s: "Смирнов Александр Евгеньевич",
													p: "Попов Владимир Романович, Попова Ирина Александровна",
													d: "03.02.26, 21:00",
													st: "Согласие",
													c: "green",
												},
												{
													s: "Васильева Елизавета Артемовна",
													p: "Смирнов Евгений Владимирович, Смирнова Наталия Петровна",
													d: "03.02.26, 21:00",
													st: "Согласие",
													c: "green",
												},
												{
													s: "Петров Иван Николаевич",
													p: "Морозов Сергей Игоревич, Морозова Татьяна Владимировна",
													d: "03.02.26, 21:00",
													st: "Ожидание",
													c: "white",
												},
												{
													s: "Соловьева Арина Максимовна",
													p: "Орлов Андрей Викторович, Орлова Людмила Дмитриевна",
													d: "03.02.26, 21:00",
													st: "Отказ",
													c: "red",
												},
												{
													s: "Козлов Данил Романович",
													p: "Петров Николай Александрович, Петрова Марина Игоревна",
													d: "03.02.26, 21:00",
													st: "Согласие",
													c: "green",
												},
												{
													s: "Новикова Вероника Дмитриевна",
													p: "Новиков Дмитрий Андреевич, Новикова Светлана Романовна",
													d: "03.02.26, 21:00",
													st: "Согласие",
													c: "green",
												},
												{
													s: "Волков Марк Александрович",
													p: "Васильев Артем Романович, Васильева Ольга Сергеевна",
													d: "03.02.26, 21:00",
													st: "Согласие",
													c: "green",
												},
												{
													s: "Морозова Алиса Сергеевна",
													p: "Козлов Роман Сергеевич, Козлова Анна Николаевна",
													d: "03.02.26, 21:00",
													st: "Ожидание",
													c: "white",
												},
												{
													s: "Лебедев Артур Игоревич",
													p: "Соловьев Максим Дмитриевич, Соловьева Елена Викторовна",
													d: "03.02.26, 21:00",
													st: "Отказ",
													c: "red",
												},
												{
													s: "Попова Камилла Владимировна",
													p: "Лебедев Игорь Николаевич, Лебедева Екатерина Сергеевна",
													d: "03.02.26, 21:00",
													st: "Согласие",
													c: "green",
												},
												{
													s: "Орлов Богдан Андреевич",
													p: "Волков Александр Петрович, Волкова Юлия Максимовна",
													d: "03.02.26, 21:00",
													st: "Согласие",
													c: "green",
												},
											].map((row, i) => (
												<div
													key={i}
													className="grid grid-cols-[1.5fr_2fr_1fr_0.8fr] gap-2 px-2 py-2.5 border-b border-white/5 hover:bg-white/5 transition-colors items-center relative group"
												>
													<div className="text-[10px] md:text-xs font-bold text-white truncate">
														{row.s}
													</div>
													<div className="text-[10px] text-gray-400 truncate">
														{row.p}
													</div>
													<div className="text-[10px] text-gray-400">
														{row.d}
													</div>
													<div className="flex justify-center sticky right-0 bg-[#121214] z-10 shadow-[-5px_0_10px_rgba(0,0,0,0.5)] h-full items-center group-hover:bg-[#1c1c1e] transition-colors -my-2.5 py-2.5">
														<span
															className={`px-2 py-0.5 rounded text-[9px] font-bold border uppercase tracking-wider
                                       ${
																					row.c === "green"
																						? "bg-green-500/10 text-green-400 border-green-500/20"
																						: row.c === "red"
																							? "bg-red-500/10 text-red-400 border-red-500/20"
																							: "bg-white/5 text-white border-white/10"
																				}`}
														>
															{row.st}
														</span>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>

								{/* Class 11A Section */}
								<div className="mb-4">
									<div className="text-sm font-bold text-white mb-3 pl-1">
										11А
									</div>
									<div className="w-full overflow-x-auto">
										<div className="min-w-[600px]">
											{/* Table Header */}
											<div className="grid grid-cols-[1.5fr_2fr_1fr_0.8fr] gap-2 px-2 pb-2 text-[10px] text-gray-500 uppercase font-bold border-b border-white/5 mb-1 relative">
												<div>Ученик</div>
												<div>Родители</div>
												<div>Дедлайн</div>
												<div className="text-center sticky right-0 bg-[#121214] z-10 shadow-[-5px_0_10px_rgba(0,0,0,0.5)]">
													Согласие
												</div>
											</div>
											{/* Rows */}
											{[
												{
													s: "Сидоров Владимир Артемович",
													p: "Федоров Петр Николаевич, Федорова Галина Александровна",
													d: "03.02.26, 21:00",
													st: "Ожидание",
													c: "white",
												},
												{
													s: "Попова Софья Евгеньевна",
													p: "Соловьев Александр Петрович, Соловьева Людмила Сергеевна",
													d: "03.02.26, 21:00",
													st: "Ожидание",
													c: "white",
												},
											].map((row, i) => (
												<div
													key={i}
													className="grid grid-cols-[1.5fr_2fr_1fr_0.8fr] gap-2 px-2 py-2.5 border-b border-white/5 hover:bg-white/5 transition-colors items-center relative group"
												>
													<div className="text-[10px] md:text-xs font-bold text-white truncate">
														{row.s}
													</div>
													<div className="text-[10px] text-gray-400 truncate">
														{row.p}
													</div>
													<div className="text-[10px] text-gray-400">
														{row.d}
													</div>
													<div className="flex justify-center sticky right-0 bg-[#121214] z-10 shadow-[-5px_0_10px_rgba(0,0,0,0.5)] h-full items-center group-hover:bg-[#1c1c1e] transition-colors -my-2.5 py-2.5">
														<span
															className={`px-2 py-0.5 rounded text-[9px] font-bold border uppercase tracking-wider
                                       ${
																					row.c === "green"
																						? "bg-green-500/10 text-green-400 border-green-500/20"
																						: row.c === "red"
																							? "bg-red-500/10 text-red-400 border-red-500/20"
																							: "bg-white/5 text-white border-white/10"
																				}`}
														>
															{row.st}
														</span>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 order-1 md:order-2">
						<div className="text-sm font-mono text-primaryStart mb-4 tracking-wider">
							анализ
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Полный контроль <br />в реальном времени
						</h2>
						<p className="text-lg text-textSecondary mb-8">
							Цветовая индикация статусов позволяет учителю мгновенно оценить
							ситуацию по классу.
						</p>
						<div className="flex flex-wrap gap-4">
							<div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 font-medium flex items-center">
								<i className="fa-solid fa-check mr-2"></i> Согласие
							</div>
							<div className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 font-medium flex items-center">
								<i className="fa-solid fa-xmark mr-2"></i> Отказ
							</div>
							<div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-medium flex items-center">
								<i className="fa-solid fa-clock mr-2"></i> Ожидание
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
