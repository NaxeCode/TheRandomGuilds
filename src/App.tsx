import About from './components/Pages/About';
import FAQ from './components/Pages/FAQ';
import Studio from './components/Pages/Studio';
import BTS from './components/Pages/BTS';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CenteredNavGuildLandingPageComponent } from './components/centered-nav-guild-landing-page';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<CenteredNavGuildLandingPageComponent />} />
					<Route path="/about" element={<About />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/studio" element={<Studio />} />
					<Route path="/bts" element={<BTS />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
