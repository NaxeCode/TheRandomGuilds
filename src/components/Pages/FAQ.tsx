import Header from '../header';
import { FaqDropdown } from '../faq-dropdown';
export default function FAQ() {
	return (
		<>
			<div className="min-h-screen bg-gray-900 text-gray-100">
				<Header />
				<FaqDropdown />
			</div>
		</>
	);
}
