import Arak from './Pages/Arak';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kapcsolat from './Pages/Kapcsolat';
import NoPage from './Pages/NoPage';
import Layout from './Components/Layout';

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
						path="arak"
						element={<Arak />}
					/>
					<Route
						path="kapcsolat"
						element={<Kapcsolat />}
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
