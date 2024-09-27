import Header from '../header';
import { AboutPageComponent } from '../about-page';
export default function About() {
	return (
		<>
			<div className="min-h-screen bg-gray-900 text-gray-100">
				<Header />
				<AboutPageComponent />
			</div>
		</>
	);
}
