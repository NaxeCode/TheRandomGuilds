import Header from '../header';
import { SubHeaderComponent } from '../subheader';
export default function BTS() {
	return (
		<>
			<div className="min-h-screen bg-gray-900 text-gray-100 ">
				<Header />
				<main className="container mx-auto px-4 py-8 justify-center text-center">
					<SubHeaderComponent />
					<h1 className="text-3xl font-semibold mb-12 ">FUN BTS</h1>
					<h2 className="mb-12">
						Welcome to the fun BTS Here, we can show some BTS like scripts,{' '}
						<br />
						stutters and funny scrapped clips for the show! <br /> We can also
						put some summary for our studio that we had may had missed!
					</h2>
					<p>
						In the behind the scenes, we wrote ideas and cool stuff! Here's out
						script to our pilot and how is it made! to our pilot into a reality
					</p>
					<a
						href="https://docs.google.com/document/d/1TL6Pwovj3XbgW7dfNmwRuTHaoxcpR2_AmozIP7GrvvM/edit"
						target="_"
					>
						<button className="mt-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
							TRG Pilot Script
						</button>
					</a>
				</main>
			</div>
		</>
	);
}
