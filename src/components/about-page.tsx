'use client';

import logo from '../assets/images/logo/logo.png';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutPageComponent() {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-12">
					<img
						src={logo}
						alt="TheRandomGuilds Logo"
						width={200}
						height={200}
						className="mx-auto mb-4"
					/>
					<h1 className="text-4xl font-bold mb-4">About Us.</h1>
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

				<Card className="bg-gray-800 text-gray-100 bg-opacity-50 backdrop-blur-sm">
					<CardContent className="p-6">
						<p className="mb-4">
							Welcome to The Random Guilds' "About Us" page! Here, you'll find
							everything you need to know about our channel. So, what exactly is
							T.R.G., or The Random Guilds? We're a fun, quirky show hosted by
							three friends, dedicated to building bonds and creating lasting
							memories for both our cast and viewers.
						</p>
						<p className="mb-4">
							Our mission is to explore new games, exciting topics, and
							interesting experiments. It's a dream project for us, one that we
							hope brings joy and opens up new perspectives for everyone who
							tunes in. We started developing the idea in mid to late 2023, and
							we're thrilled to finally be making progress!
						</p>
						<p className="mb-4">
							Oh, and here's a fun tip: we love hiding Easter eggs throughout
							our show! Keep an eye out for clickable hidden symbols and
							surprises. You never know what you might find!
						</p>
						<h2 className="text-2xl font-semibold mb-4 mt-8">Our Mission</h2>
						<ul className="list-disc list-inside space-y-2">
							<li>
								Protect the innocent and defend the realms from all manner of
								threats
							</li>
							<li>
								Seek out and neutralize sources of dark magic and corruption
							</li>
							<li>Preserve ancient knowledge and magical artifacts</li>
							<li>Foster cooperation between different races and factions</li>
							<li>
								Train the next generation of heroes to carry on our legacy
							</li>
						</ul>
					</CardContent>
				</Card>

				<div className="mt-12 text-center">
					<h2 className="text-2xl font-semibold mb-4">Join Our Ranks</h2>
					<p className="mb-4">
						The Prismatic Vanguard is always on the lookout for brave souls
						willing to take up the mantle of heroism. If you possess
						extraordinary skills, unwavering courage, or a burning desire to
						make a difference in the world, we want to hear from you.
					</p>
					<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
						Apply to Join
					</button>
				</div>
			</main>
		</div>
	);
}
