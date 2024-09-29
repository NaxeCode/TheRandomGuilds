import logo from '../assets/images/logo/logo.png';
import {
	IconBrandYoutube,
	IconBrandInstagram,
	IconBrandSpotify,
	IconBrandTwitter,
	IconBrandDiscord,
	IconMail,
} from '@tabler/icons-react';

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
					aria-label="Youtube"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<IconBrandYoutube className="fill-red-500" size={24} />
				</a>
				<a
					href="#"
					aria-label="Instagram"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<IconBrandInstagram className="fill-yellow-500" size={24} />
				</a>
				<a
					href="#"
					aria-label="Spotify"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<IconBrandSpotify className="fill-green-500" size={24} />
				</a>
				<a
					href="#"
					aria-label="Twitter"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<IconBrandTwitter className="fill-cyan-500" size={24} />
				</a>
				<a
					href="#"
					aria-label="Discord"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<IconBrandDiscord className="fill-blue-800" size={24} />
				</a>
				<a
					href="#"
					aria-label="Mail"
					className="text-gray-300 hover:text-white transition-colors"
				>
					<IconMail className="fill-purple-600" size={24} />
				</a>
			</div>
		</div>
	);
}
