import React from 'react';
import Hero from '../Components/Hero';
import HeroCards from '../Components/HeroCards';
import Informative from '../Components/Informative';
import Prices from '../Components/Prices';

const Home = () => {
	return (
		<>
			<Hero />
			<HeroCards />
			<Informative />
			<Prices />
		</>
	);
};

export default Home;
