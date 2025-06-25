import React from 'react';

const HeroCards = () => {
	return (
		<div className="relative mt-10">
			<div className=" flex flex-row justify-evenly relative">
				<div className="bg-[#0784b5] text-white min-h-[30vh] w-1/4  mt-[-15vh] rounded-lg p-5">
					<span className="font-bold text-2xl">✳️A rendszeres karbantartás előnyei: </span>
					<br />
					<ul className="mt-2 flex flex-col gap-2 text-lg">
						<li>• Egészségesebb, frissebb levegő otthonában</li>
						<li>• Megelőzhető a penész és baktérium elszaporodása </li>
						<li>• Meghosszabbítja a klíma élettartamát </li>
						<li>• Csökkenti az energiafogyasztást</li>
						<li>• Csendesebb és hatékonyabb működés</li>
					</ul>
				</div>
				<div className="bg-[#0784b5]  w-1/4  mt-[-15vh] rounded-lg p-5 text-gray-100">
					<h1 className="font-bold text-2xl">🛠️Szolgáltatásaink:</h1>
					<ul className="mt-2 flex flex-col gap-2 text-lg">
						<li>• Vegyszeres tisztítás mosózsákkal</li>
						<li>• Magasnyomású mosás</li>
						<li>• Penész, baktérium eltávolítás</li>
						<li>• Cipővédő használata igény szerint</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HeroCards;
