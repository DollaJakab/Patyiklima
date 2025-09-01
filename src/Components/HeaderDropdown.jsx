import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';

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
				<Hamburger
					className="text-[#39ace7] text-4xl hover:cursor-pointer"
					toggled={isOpen}
					toggle={setIsOpen}
					color="#39ace7"
				/>
			</button>

			<ul
				className={`absolute right-0  mt-2 w-80 p-3 flex flex-col gap-2 bg-[#39ace7] text-white  text-xl rounded-lg shadow-lg transform transition-all duration-200 ease-in-out ${
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
