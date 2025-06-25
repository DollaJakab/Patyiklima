import React from 'react';

const Header = () => {
	return (
		<div className="w-screen fixed z-10">
			<div className="flex justify-between px-50 py-3 bg-[#39ace7]">
				<ul className="flex gap-5 text-white">
					<li>+36201234567</li>
					<li>test&test.com</li>
				</ul>
			</div>
			<div className="flex justify-between px-50 py-5 bg-white align-middle text-black">
				<h1 className="text-3xl font-black my-auto">Patyi Klíma</h1>
				<ul className="flex gap-5 my-auto">
					<li>Főoldal</li>
					<li>Klímatisztítás árak</li>
					<li>Galéria</li>
					<li>Kapcsolat</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
