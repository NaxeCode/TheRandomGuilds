'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Instagram, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function CenteredNavGuildLandingPageComponent() {
	const characters = [
		{
			name: 'Elara Moonwhisper',
			role: 'Elven Archer',
			description:
				"A skilled archer with eyes sharp as her arrows. Elara's connection to nature makes her an invaluable scout for the Prismatic Vanguard. Her keen senses and swift movements have saved the team from ambushes more times than can be counted.",
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-red-400',
		},
		{
			name: 'Grimlock Ironheart',
			role: 'Dwarven Warrior',
			description:
				"Built like a mountain and twice as stubborn, Grimlock's axe has felled countless foes in battle. His unwavering loyalty and strength form the backbone of the Vanguard's front line, always ready to protect his comrades.",
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-orange-400',
		},
		{
			name: 'Zephyr Stormcaller',
			role: 'Human Mage',
			description:
				"Master of the arcane arts, Zephyr's spells can turn the tide of any encounter in an instant. His vast knowledge of magical lore and quick thinking have helped the Vanguard overcome seemingly impossible challenges.",
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-yellow-400',
		},
		{
			name: 'Thorne Shadowstep',
			role: 'Halfling Rogue',
			description:
				'Small in stature but big on stealth, Thorne can slip past any guard and pick any lock. His nimble fingers and sharp wit have gotten the Vanguard out of (and sometimes into) the tightest of spots.',
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-green-400',
		},
		{
			name: 'Luna Frostweaver',
			role: 'Gnome Enchantress',
			description:
				"A master of illusions and enchantments, Luna's spells can befuddle even the most strong-willed opponents. Her creative problem-solving and magical ingenuity provide the Vanguard with unexpected advantages in their quests.",
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-blue-400',
		},
		{
			name: 'Azura Starborn',
			role: 'Aasimar Paladin',
			description:
				"Blessed by the celestials, Azura's radiant power smites evil and heals allies in times of need. Her unwavering faith and inspiring presence bolster the Vanguard's resolve in the face of darkness.",
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-indigo-400',
		},
	];

	const navItems = ['Cast', 'About Us', 'FAQs', 'Studio', 'BTS'];

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			<header className="py-4 px-4 bg-gray-800 bg-opacity-50 sticky top-0 z-10 backdrop-blur-sm">
				<div className="container mx-auto">
					<nav className="hidden md:flex justify-center space-x-8">
						{navItems.map((item, index) => (
							<a
								key={index}
								href="#"
								className="hover:text-gray-300 transition-colors"
							>
								{item}
							</a>
						))}
					</nav>
					<DropdownMenu>
						<DropdownMenuTrigger asChild className="md:hidden mx-auto block">
							<Button variant="outline" size="icon">
								<Menu className="h-[1.2rem] w-[1.2rem]" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="center">
							{navItems.map((item, index) => (
								<DropdownMenuItem key={index}>
									<a href="#" className="w-full">
										{item}
									</a>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-12">
					<img
						src=""
						alt="The Prismatic Vanguard Logo"
						width={100}
						height={100}
						className="mx-auto mb-4"
					/>
					<h1 className="text-4xl font-bold mb-4">The Prismatic Vanguard</h1>
					<p className="max-w-2xl mx-auto mb-4">
						We are a diverse group of adventurers, united by our quest for
						justice and our commitment to protecting the realm. With members
						from all walks of life and corners of the world, we bring unique
						skills and perspectives to every challenge we face.
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
					Meet Our Heroes
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
								<div className="md:w-1/3 relative aspect-square overflow-hidden rounded-full shadow-lg mt-6 md:mt-0">
									<img
										src={character.image}
										alt={character.name}
										className="transition-transform duration-300 hover:scale-110"
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
