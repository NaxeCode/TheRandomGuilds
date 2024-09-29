'use client';

import cat from '../assets/images/cast/cat.png';
import matt from '../assets/images/cast/matt.png';
import caleb from '../assets/images/cast/caleb.png';
import chatherline from '../assets/images/cast/chatherline.png';
import edward from '../assets/images/cast/edward.png';
import anny from '../assets/images/cast/anny.png';

import logo from '../assets/images/logo/logo.png';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Header from './header';

export function CenteredNavGuildLandingPageComponent() {
	const characters = [
		{
			name: 'Cat',
			role: 'Queen',
			description:
				"Cat is One of the host and founders for T.R.G. She's the definition of Chaotic, Energenic, enthusiastic, and A mood swing between Cool and Childish/Playful. Her main responsibility is unknown, but she holds a heavy resposibility for Editing, Sosial Media and Visual Ideas.",
			image: cat,
			color: 'text-green-300',
		},
		{
			name: 'Matt',
			role: 'Human',
			description:
				'Matthew is one of the founders of The Random Guild, he\'s main appearance is mostly Red wearing a sweater. He\'s known for the content Research for the Podcast/Gaming. He has great skills behind the wheel in Racing Games and has an encyclopedia about Motorsports. Sarcastic, Friendly, Charming, and known to say "Oh For God Sake". In our Videos.',
			image: matt,
			color: 'text-red-600',
		},
		{
			name: 'Caleb',
			role: 'Indo-Warrior',
			description:
				"Caleb is one of the founders of The Random guild and he is one of the host. He's a wheelchair guy, and He's a chill introverted guy. He is in charge of history and gaming and he like to research about animals and nature also history and a geek towards dinos. He is currently learning many languages and hes known by saying jurassic park quotes. And held resposibility to write subtitles and warms his bud's hearts.",
			image: caleb,
			color: 'text-purple-600',
		},
		{
			name: 'Chatherline',
			role: 'Singer',
			description:
				"Chatherline is one of the cast for T.R.G. She's responsible for assisting research with Matthew and presenting/reposting news. She's sarcastic and usually doesn't take things seriously. She's a fun, extroverted person and always has confidence as her personality.",
			image: chatherline,
			color: 'text-blue-300',
		},
		{
			name: 'Edward',
			role: 'Scripter',
			description:
				"Edward is one of cast for the T.R.G. and the oldest one too. Responsible for assisting the script and keep most of each section well organized. This is why he's held parts of responsibility in the research room. He's quite formal, straight forward and calm. Yet he's kindhearted and sweet, as he prefers to show it throughout his act..",
			image: edward,
			color: 'text-blue-700',
		},
		{
			name: 'Anny',
			role: 'Subs',
			description:
				"A sweet, naive girl who seems shy at first, but can be very sociable when you get close! She usually appears very extroverted 24/7, but she's actually introverted and likes personal space and peace off-screen. She's great at assisting with multiple tasks like scripting or subtitles to help TRG.",
			image: anny,
			color: 'text-yellow-300',
		},
	];

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			<Header />
			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-12">
					<img
						src={logo}
						alt="TheRandomGuilds Logo"
						width={200}
						height={200}
						className="mx-auto mb-4"
						draggable="false"
					/>
					<h1 className="text-4xl font-bold mb-4">TheRandomGuilds</h1>
					<p className="max-w-2xl mx-auto mb-4">
						Welcome to the official T.R.G's Website/carrd! Here, we show you
						what's the details and basics stuff within this show! In case you
						missed it.
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
				<h2 className="text-3xl font-semibold mb-12 text-center">
					Meet Our Cast!
				</h2>
				<div className="space-y-24">
					{characters.map((character, index) => (
						<Card
							key={index}
							className="overflow-hidden bg-transparent border-none shadow-none"
						>
							<CardContent
								className={`p-0 flex flex-col ${
									index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
								} items-center`}
							>
								<div
									className={`flex-1 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg ${
										index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
									}`}
								>
									<h3 className={`text-3xl font-bold mb-2 ${character.color}`}>
										{character.name}
									</h3>
									<h4 className="text-xl text-gray-300 mb-4">
										{character.role}
									</h4>
									<p className="text-gray-100 leading-relaxed">
										{character.description}
									</p>
								</div>
								<div className="md:w-1/3 relative aspect-square overflow-hidden  shadow-lg mt-6 md:mt-0">
									<img
										src={character.image}
										alt={character.name}
										className="transition-transform duration-300 hover:scale-110"
										draggable="false"
									/>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</main>
		</div>
	);
}
