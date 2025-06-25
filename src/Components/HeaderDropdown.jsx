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
				className={`absolute right-0 mt-2 w-48 bg-[#39ace7] text-white p-4 rounded-lg shadow-lg transform transition-all duration-200 ease-in-out ${
					isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
				}`}
			>
				<li>
					<Link
						to="/"
						onClick={() => setIsOpen(false)}
					>
						Főoldal
					</Link>
				</li>
				<li>
					<Link
						to="/arak"
						onClick={() => setIsOpen(false)}
					>
						Klímatisztítás árak
					</Link>
				</li>
				<li>
					<Link
						to="/galeria"
						onClick={() => setIsOpen(false)}
					>
						Galéria
					</Link>
				</li>
				<li>
					<Link
						to="/kapcsolat"
						onClick={() => setIsOpen(false)}
					>
						Kapcsolat
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default HeaderDropdown;
