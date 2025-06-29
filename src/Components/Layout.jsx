import { Outlet } from 'react-router-dom';
import Header from './Header'; // adjust path

const Layout = () => {
	return (
		<>
			<Header />
			<main className="">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
