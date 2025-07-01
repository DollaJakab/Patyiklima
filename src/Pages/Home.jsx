import Hero from '../Components/Hero';
import HeroCards from '../Components/HeroCards';
import Informative from '../Components/Informative';
import Prices from '../Components/Prices';
import Faq from '../Components/Faq';
import Contact from '../Components/Contact';

const Home = () => {
	return (
		<>
			<Hero />
			<HeroCards />
			<Informative />
			<Prices />
			<Contact />
			<Faq />
		</>
	);
};

export default Home;
