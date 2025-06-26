import React from 'react';
import RotatingCard from './RotatingCard';

const HeroCards = () => {
	return (
		<div className="relative mt-10">
			<div className=" flex flex-col md:flex-row gap-3 md:gap-0 mx-3 md:mx-0 justify-evenly relative">
				<RotatingCard>
					<span className="font-bold text-2xl">✳️A rendszeres karbantartás előnyei: </span>
					<br />
					<ul className="mt-2 flex flex-col gap-2 text-lg">
						<li>• Egészségesebb, frissebb levegő otthonában</li>
						<li>• Megelőzhető a penész és baktérium elszaporodása </li>
						<li>• Meghosszabbítja a klíma élettartamát </li>
						<li>• Csökkenti az energiafogyasztást</li>
						<li>• Csendesebb és hatékonyabb működés</li>
					</ul>
				</RotatingCard>
				<RotatingCard>
					<h1 className="font-bold text-2xl">🛠️Szolgáltatásaink:</h1>
					<ul className="mt-2 flex flex-col gap-2 text-lg">
						<li>• Vegyszeres tisztítás mosózsákkal</li>
						<li>• Magasnyomású mosás</li>
						<li>• Penész, baktérium eltávolítás</li>
						<li>• Cipővédő használata igény szerint</li>
					</ul>
				</RotatingCard>
			</div>
		</div>
	);
};

export default HeroCards;
