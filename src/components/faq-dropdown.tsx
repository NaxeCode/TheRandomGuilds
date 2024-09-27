'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
	{
		question: 'What is the Prismatic Vanguard?',
		answer:
			'The Prismatic Vanguard is an elite group of diverse adventurers dedicated to protecting the realm from various threats. We combine our unique skills and backgrounds to tackle challenges that endanger our world.',
	},
	{
		question: 'How can I join the Prismatic Vanguard?',
		answer:
			'To join the Prismatic Vanguard, you must demonstrate exceptional skills, unwavering courage, and a strong desire to make a difference. We accept applications year-round and conduct rigorous testing and interviews for potential recruits.',
	},
	{
		question: 'Where is the Prismatic Vanguard based?',
		answer:
			'Our main headquarters is located in Skyhold, a floating citadel that serves as our home and strategic base of operations. However, our members can be found all across the realm, ready to respond to any crisis.',
	},
	{
		question: 'What types of missions does the Prismatic Vanguard undertake?',
		answer:
			'Our missions vary widely, from protecting villages from monster attacks to investigating arcane anomalies, from recovering powerful artifacts to mediating conflicts between different factions. No two days are the same in the Vanguard!',
	},
	{
		question: 'Do I need to be a fighter to join the Prismatic Vanguard?',
		answer:
			'Not at all! While we value skilled warriors, we also need individuals with talents in magic, healing, strategy, diplomacy, and various other fields. Diversity is our strength, and we welcome all who have extraordinary abilities and a heroic spirit.',
	},
];

export function FaqDropdown() {
	return (
		<div className="w-full max-w-3xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6">
			<Accordion type="single" collapsible className="w-full space-y-4">
				{faqs.map((faq, index) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className="border border-gray-700 rounded-lg overflow-hidden"
					>
						<AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all text-gray-100">
							{faq.question}
							<ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200" />
						</AccordionTrigger>
						<AccordionContent className="px-6 py-4 text-base text-gray-100">
							{faq.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
