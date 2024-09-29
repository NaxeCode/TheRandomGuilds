import Header from '../header';
import { FaqDropdown } from '../faq-dropdown';
import { SubHeaderComponent } from '../subheader';
export default function FAQ() {
	return (
		<>
			<div className="min-h-screen bg-gray-900 text-gray-100">
				<Header />
				<main className="container mx-auto px-4 py-8">
					<SubHeaderComponent />
					<h2 className="text-3xl font-semibold mb-12 text-center">FAQs.</h2>
					<FaqDropdown />
				</main>
			</div>
		</>
	);
}
