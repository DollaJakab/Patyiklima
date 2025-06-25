import React from 'react';

const Hero = () => {
	return (
		<div className="realtive bg-black h-screen overflow-hidden">
			<div className="absolute inset-0 bg-cover bg-center opacity-55 h-full bg-[url(https://www.hurleyanddavid.com/wp-content/uploads/2022/05/hurley-david-ac-technician-min-1.jpg)] blur-xs"></div>
			<div className="relative z-10 flex items-center justify-center h-full">
				<div className="text-center text-white">
					<h1 className="text-4xl md:text-6xl font-bold">Your Comfort, Our Priority</h1>
					<p className="mt-4 text-xl">Expert AC Service You Can Trust</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
