import React, { useState } from 'react';

const RotatingCard = ({ children }) => {
	const [style, setStyle] = useState({});

	const handleMouseMove = (e) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -10;
		const rotateY = ((x - centerX) / centerX) * 10;

		setStyle({
			transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
			transition: 'transform 0.1s ease-out',
			transformStyle: 'preserve-3d',
		});
	};

	const resetRotation = () => {
		setStyle({
			transform: 'rotateX(0deg) rotateY(0deg)',
			transition: 'transform 0.3s ease',
			transformStyle: 'preserve-3d',
		});
	};

	return (
		<div style={{ perspective: '1000px' }}>
			<div
				onMouseMove={handleMouseMove}
				onMouseLeave={resetRotation}
				className="bg-[#0784b5] drop-shadow-2xl text-white min-h-[30vh] min-w-[20vw]  md:mt-[-15vh] rounded-lg p-5 transition-all duration-300 transform-gpu ease-in-out"
				style={style}
			>
				{children}
			</div>
		</div>
	);
};

export default RotatingCard;
