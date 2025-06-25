import React from 'react';

const Informative = () => {
	return (
		<div className="flex flex-col gap-10 mt-20 mx-30 text-gray-900">
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
					<li>✅ Az ár mindent tartalmaz – nincs rejtett költség!</li>
				</ul>
			</div>
			<div className="self-end mb-20">
				<h1 className="text-3xl font-bold">
					A feltüntetett ár teljes körű szolgáltatásra vonatkozik, amely magában foglalja:
				</h1>
				<ul className="mt-3 text-lg">
					<li>
						🔹 A beltéri egység alapos, vegyszeres, magasnyomású tisztítását (mosózsákkal, hogy a lakás ne
						szennyeződjön)
					</li>
					<li>🔹 A kültéri egység tisztítását magasnyomású mosóval</li>
					<li>🔹 A kiszállás díját a megadott címen belül</li>
					<li>🔹 Parkolási díjat – nem terhelünk utólagos költségekkel</li>
					<li>🔹 Igény esetén cipővédő használatát, hogy a tisztaság a lakásban is megmaradjon</li>
					<li>🔹 A rendszer működésének ellenőrzését és cseppvízelvezető tisztítását is</li>
				</ul>
			</div>
		</div>
	);
};

export default Informative;
