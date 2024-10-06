'use client';

import logo from '../assets/images/logo/logo.png';

import { Card, CardContent } from '@/components/ui/card';

export function CenteredNavGuildStudioPageComponent() {
	const characters = [
		{
			name: 'Mini Studio',
			description:
				"The starting point of our studio! Small, muted yet quite nice. Nothing much has going on but it's quite welcoming.",
			image: logo,
			color: 'text-blue-300',
		},
		{
			name: 'Gaming Room',
			description:
				'The gaming room is where us as host play games for youtube contents!',
			image: logo,
			color: 'text-blue-300',
		},
		{
			name: 'Podcast Room',
			description:
				'The gaming room is where we talk about news, updates, fun activity, or new ideas that can be possible in the show! We can also ft-ing other content creators to question or talk about content creations!',
			image: logo,
			color: 'text-blue-700',
		},
		{
			name: 'Gaming Room',
			description:
				'The gaming room is where us as host play games for youtube contents!',
			image: logo,
			color: 'text-yellow-300',
		},
	];

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			<main className="container mx-auto px-4 py-8">
				<div className="space-y-24">
					{characters.map((character, index) => (
						<Card
							key={index}
							className="bg-transparent border-none shadow-none"
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
									<p className="text-gray-100 leading-relaxed">
										{character.description}
									</p>
								</div>
								<div className="md:w-1/3 relative aspect-square shadow-lg mt-6 md:mt-0">
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
