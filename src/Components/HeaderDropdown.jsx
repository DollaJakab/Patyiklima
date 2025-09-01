import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef();

	return (
		<div
			className="relative"
			ref={menuRef}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-label="Toggle navigation menu"
				className="text-2xl text-white"
			>
				<GiHamburgerMenu className="text-[#39ace7] text-4xl hover:cursor-pointer" />
			</button>

			<ul
				className={`absolute right-[-10px] mt-2 w-48 bg-[#39ace7] text-white p-3 text-lg rounded-lg shadow-lg transform transition-all duration-200 ease-in-out ${
					isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
				}`}
			>
				<li>
					<Link
						to="/"
						onClick={() => {
							setIsOpen(false);
							window.scrollTo({ top: 0 });
						}}
					>
						Főoldal
					</Link>
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
								setIsOpen(false);
							}
						}}
					>
						Klímatisztítás árak
					</button>
				</li>
				{/*<li>
					<Link
						to="/galeria"
						onClick={() => setIsOpen(false)}
					>
						Galéria
					</Link>
				</li>
				*/}
				<li>
					<button
						className="hover:cursor-pointer"
						onClick={() => {
							setIsOpen(false);
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
		</div>
	);
};

export default HeaderDropdown;
