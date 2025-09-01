import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import HeaderDropdown from './HeaderDropdown';

const Header = () => {
	return (
		<div className="w-screen fixed z-10">
			<div className="flex justify-center md:justify-start px-30 lg:px-50 py-3 bg-[#0784b5]">
				<ul className="hidden gap-5 text-gray-100 md:flex font-bold">
					<li>
						<a href="tel:+36309227615"> +36309227615</a>
					</li>
					<li>
						<a href="mailto:patyiklima@gmail.com">patyiklima@gmail.com</a>
					</li>
				</ul>
				<ul className="flex justify-end gap-5 text-white md:hidden">
					<li>
						<a href="tel:+36309227615">
							<FaPhone />
						</a>
					</li>
					<li>
						<a href="mailto:patykilma@gmail.com">
							<MdOutlineEmail />
						</a>
					</li>
				</ul>
			</div>
			<div className="flex justify-between md:justify-between px-5 md:px-25 lg:px-50 py-1 bg-gray-50 items-center text-black">
				<img
					className="md:w-18 w-15"
					src="./logo_small_2.png"
					alt="logo"
				/>
				{/* <h1 className="text-4xl font-bold text-gray-900 my-auto">Patyi Klíma</h1> */}
				<ul className="hidden md:flex gap-5 items-center text-gray-900 font-semibold">
					<li>
						<Link
							to={'/'}
							className="hover:cursor-pointer hover:text-[#39ace7] transition-all duration-300"
							onClick={() => window.scrollTo({ top: 0 })}
						>
							Főoldal
						</Link>
					</li>
					<li>
						<button
							className="hover:cursor-pointer hover:text-[#39ace7] transition-all duration-300"
							onClick={() => {
								const element = document.getElementById('prices');
								if (element) {
									const yOffset = -200; // adjust based on your header height
									const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
									window.scrollTo({ top: y, behavior: 'smooth' });
								}
							}}
						>
							Klímatisztítás árak
						</button>
					</li>
					{/*<li>
						<Link
							className="hover:text-[#39ace7] transition-all duration-300"
							to="/arak"
						>
							Galéria
						</Link>
					</li>*/}
					<li className="p-3 bg-[#39ace7] rounded-md text-gray-100 hover:scale-110 transition-all duration-300 ease-in-out">
						<button
							className="hover:cursor-pointer "
							onClick={() => {
								const element = document.getElementById('contact');
								if (element) {
									const yOffset = -150;
									const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
									window.scrollTo({ top: y, behavior: 'smooth' });
								}
							}}
						>
							Kapcsolat
						</button>
					</li>
				</ul>
				<div className="block md:hidden">
					<HeaderDropdown />
				</div>
			</div>
		</div>
	);
};

export default Header;
