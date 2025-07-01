import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './Pages/NoPage';
import Layout from './Components/Layout';
import Afsz from './Pages/Afsz';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="afsz"
						element={<Afsz />}
					/>
					<Route
						path="*"
						element={<NoPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
