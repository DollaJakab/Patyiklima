import React from 'react';

const Hero = () => {
	return (
		<div className="realtive bg-black h-screen overflow-hidden pt-20">
			<div className="absolute inset-0 bg-cover bg-center opacity-45 h-full bg-[url(https://www.hurleyanddavid.com/wp-content/uploads/2022/05/hurley-david-ac-technician-min-1.jpg)] blur-xs"></div>
			<div className="relative z-0 flex items-center justify-center h-full">
				<div className="text-center text-white">
					<h1 className="text-4xl md:text-6xl md:leading-20 font-bold line">
						Professzionális klímatisztítás
						<br /> Budapesten és környékén
					</h1>
					<p className="mt-10 text-2xl">Hangsúly a biztonságon, hatékonyságon és tiszta levegőn</p>
					<button className="bg-[#39ace7] text-gray-100 p-5 text-3xl font-black mt-20 rounded-xl hover:cursor-pointer transform-gpu ease-in-out hover:scale-105 duration-500 transition-all ">
						Kérj időpontot
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
