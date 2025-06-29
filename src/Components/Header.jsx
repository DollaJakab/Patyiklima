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
						<a href="mailto:patyi.peter2000@gmail.com">patyi.peter2000@gmail.com</a>
					</li>
				</ul>
				<ul className="flex justify-end gap-5 text-white md:hidden">
					<li>
						<a href="tel:+36309227615">
							<FaPhone />
						</a>
					</li>
					<li>
						<a href="mailto:patyi.peter2000@gmail.com">
							<MdOutlineEmail />
						</a>
					</li>
				</ul>
			</div>
			<div className="flex justify-between md:justify-between px-10 md:px-25 lg:px-50 py-5 bg-gray-50 items-center text-black h-30">
				<h1 className="text-4xl font-bold text-gray-900 my-auto">Patyi Klíma</h1>
				<ul className="hidden md:flex gap-5 items-center text-gray-900">
					<li>
						<button
							className="hover:cursor-pointer"
							onClick={() => window.scrollTo({ top: 0 })}
						>
							Főoldal
						</button>
					</li>
					<li>
						<button
							className="hover:cursor-pointer"
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
					<li>
						<Link to="/arak">Galéria</Link>
					</li>
					<li className="p-3 bg-[#39ace7] rounded-md text-gray-100">
						<Link to="/kapcsolat">Kapcsolat</Link>
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
