import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import { FaHouseChimney } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { IoShareSocial } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="max-w-[90vw] md:max-w-[50vw] mx-auto md:pt-10 flex flex-col gap-5 mb-3 text-[#0784b5] font-bold border-t-1">
			<div className="flex justify-between md:flex-row flex-col md:gap-0 gap-5">
				<div>
					<img
						className="w-75 md:block hidden"
						src="/logo.png"
						alt="logo"
					/>
				</div>
				<div className="flex flex-col gap-3">
					<h1 className="flex items-center gap-2 text-xl border-b-1 pb-1">
						<FaHouseChimney />
						Elérhetőség
					</h1>
					<div>
						<p className="flex items-center gap-2">
							<FaPhone /> +36309227615
						</p>
						<p className="flex items-center gap-2">
							<IoIosMail /> patyiklima@gmail.com
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<h1 className="flex items-center gap-2 text-xl border-b-1 pb-1">
						<IoShareSocial /> További felületeink
					</h1>
					<div className="flex gap-2 text-2xl">
						<FaFacebook />
						<FaInstagram />
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-center gap-3 font-normal">
				<div>
					<Link
						className="font-bold"
						to={'/afsz'}
					>
						Adatvédelmi tájékoztató |&nbsp;
					</Link>
					<Link
						className="font-bold"
						to={'/impresszum'}
					>
						Impresszum
					</Link>
				</div>
				<p>©Patyiklíma - Minden jog fenntartva | Made by Dolla Jakab</p>
			</div>
		</div>
	);
};

export default Footer;
