import React from 'react';

const Informative = () => {
	return (
		<div className="flex flex-col gap-10 mt-20 mx-10 md:mx-30 text-gray-900">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold relative">
						<span className="absolute top-[-21px] left-[-26px] rotate-90">🔧</span> Mi hogyan dolgozunk?
					</h1>

					<h2 className="font-bold text-xl pt-2">Mi nem csak a szűrőket mossuk ki!</h2>
					<ul className="text-lg pl-3 pt-3">
						<li>
							✅ A beltéri egységet mosózsákkal burkoljuk be, hogy a tisztítás során ne szennyeződjön a
							környezet
						</li>
						<li>
							✅ Ezt követően speciális vegyszerrel és magasnyomású technikával alaposan átmossuk a teljes
							beltéri egységet
						</li>
						<li>
							✅ A kültéri egységet is magasnyomású mosóval tisztítjuk meg a lerakódott portól, kosztól,
							rovaroktól
						</li>
					</ul>
				</div>
				<img
					src="/klima.png"
					className="w-100 hidden md:block"
				></img>
			</div>
			<div className=" mb-20 flex justify-between items-center">
				<img
					className="scale-x-[-1] w-100 hidden md:block"
					src="/klima2.png"
					alt="klima"
				/>
				<div>
					<h1 className="text-3xl font-bold">
						A feltüntetett ár teljes körű szolgáltatásra vonatkozik, amely magában foglalja:
					</h1>
					<ul className="mt-3 text-lg">
						<li>🔹 A kültéri és a beltéri egység alapos tisztítását</li>
						<li>🔹 A kiszállás díját</li>
						<li>🔹 Parkolási díjat</li>
						<li>🔹 Igény esetén cipővédő használatát</li>
						<li>🔹 A rendszer működésének ellenőrzését és cseppvízelvezető tisztítását is</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Informative;
