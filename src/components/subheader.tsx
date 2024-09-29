import logo from '../assets/images/logo/logo.png';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function SubHeaderComponent() {
	return (
		<div className="text-center mb-12">
			<img
				src={logo}
				alt="TheRandomGuilds Logo"
				width={200}
				height={200}
				className="mx-auto mb-4"
			/>
			<h1 className="text-4xl font-bold mb-4">TheRandomGuilds</h1>
			<p className="max-w-2xl mx-auto mb-4">
				Welcome to the official T.R.G's Website/carrd! Here, we show you what's
				the details and basics stuff within this show! In case you missed it.
			</p>
			<div className="flex justify-center space-x-4">
				<a
					href="#"
					aria-label="Facebook"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<Facebook size={24} />
				</a>
				<a
					href="#"
					aria-label="Twitter"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<Twitter size={24} />
				</a>
				<a
					href="#"
					aria-label="Instagram"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<Instagram size={24} />
				</a>
			</div>
		</div>
	);
}
