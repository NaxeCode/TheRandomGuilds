import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconMenu2 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export default function header() {
	const navItems = ['Home', 'About Us', 'FAQs', 'Studio', 'BTS'];
	const navLinks = ['/', '/about', '/faq', '/studio', '/bts'];
	return (
		<div className="bg-gray-900 text-gray-100">
			<header className="py-4 px-4 bg-gray-800 bg-opacity-50 sticky top-0 z-10 backdrop-blur-sm">
				<div className="container mx-auto">
					<nav className="hidden md:flex justify-center space-x-8">
						{navItems.map((item, index) => (
							<Link
								key={index}
								to={navLinks[index]}
								className="hover:text-gray-300 transition-colors"
								draggable="false"
							>
								{item}
							</Link>
						))}
					</nav>
					<DropdownMenu>
						<DropdownMenuTrigger asChild className="md:hidden block mx-auto">
							<Button
								variant="ghost"
								size="icon"
								className="flex items-center justify-center"
							>
								<IconMenu2 className="w-5 h-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="center">
							{navItems.map((item, index) => (
								<DropdownMenuItem key={index}>
									<a href={navLinks[index]} className="w-full">
										{item}
									</a>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
		</div>
	);
}
