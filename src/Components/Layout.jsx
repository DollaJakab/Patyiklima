import { Outlet } from 'react-router-dom';
import Header from './Header'; // adjust path
import Footer from './Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<main className="">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
