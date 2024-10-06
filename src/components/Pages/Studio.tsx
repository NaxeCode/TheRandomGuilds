import Header from '../header';
import { SubHeaderComponent } from '../subheader';
import { CenteredNavGuildStudioPageComponent } from '../centered-nav-guild-studio-page';
export default function Studio() {
	return (
		<>
			<div className="min-h-screen bg-gray-900 text-gray-100">
				<Header />
				<main className="container mx-auto px-4 py-8">
					<SubHeaderComponent />
					<h2 className="text-3xl font-semibold mb-12 text-center">
						Here's the summary of our studio
						<br />
						Where all wacky stuff comes around...
					</h2>
					<CenteredNavGuildStudioPageComponent />
				</main>
			</div>
		</>
	);
}
