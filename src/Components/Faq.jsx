import React from 'react';
import FaqQuestion from './FaqQuestion';
import { LuMessageCircleQuestion } from 'react-icons/lu';

const Faq = () => {
	const data = [
		{
			question: 'Milyen gyakran kell klímát tisztítani?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin vehicula luctus. Suspendisse eu sollicitudin nibh, et dapibus elit. Mauris hendrerit ex sem, sit amet lobortis erat euismod a. Suspendisse elit ex, interdum ac lacinia sed, lacinia ut mauris. Vivamus fermentum erat in odio laoreet tempor. Maecenas velit erat, iaculis at luctus at, interdum a turpis. Cras erat urna, ullamcorper eget sem vel, volutpat rutrum quam. In venenatis velit vitae augue convallis tincidunt.',
		},
		{
			question: 'Mennyi ideig tart egy tisztítás?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin vehicula luctus. Suspendisse eu sollicitudin nibh, et dapibus elit. Mauris hendrerit ex sem, sit amet lobortis erat euismod a. Suspendisse elit ex, interdum ac lacinia sed, lacinia ut mauris. Vivamus fermentum erat in odio laoreet tempor. Maecenas velit erat, iaculis at luctus at, interdum a turpis. Cras erat urna, ullamcorper eget sem vel, volutpat rutrum quam. In venenatis velit vitae augue convallis tincidunt.',
		},
		{
			question: 'Otthon kell tartózkodni?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin vehicula luctus. Suspendisse eu sollicitudin nibh, et dapibus elit. Mauris hendrerit ex sem, sit amet lobortis erat euismod a. Suspendisse elit ex, interdum ac lacinia sed, lacinia ut mauris. Vivamus fermentum erat in odio laoreet tempor. Maecenas velit erat, iaculis at luctus at, interdum a turpis. Cras erat urna, ullamcorper eget sem vel, volutpat rutrum quam. In venenatis velit vitae augue convallis tincidunt.',
		},
		{
			question: 'Milyen garanciát vállaltok?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin vehicula luctus. Suspendisse eu sollicitudin nibh, et dapibus elit. Mauris hendrerit ex sem, sit amet lobortis erat euismod a. Suspendisse elit ex, interdum ac lacinia sed, lacinia ut mauris. Vivamus fermentum erat in odio laoreet tempor. Maecenas velit erat, iaculis at luctus at, interdum a turpis. Cras erat urna, ullamcorper eget sem vel, volutpat rutrum quam. In venenatis velit vitae augue convallis tincidunt.',
		},
	];
	return (
		<div className="flex justify-center items-center bg-[#0784b5]">
			<div className="my-3 flex flex-col justify-center items-center p-3 gap-3">
				<h1 className="font-semibold text-lg md:text-2xl text-gray-100 relative">
					<LuMessageCircleQuestion className="absolute right-[-35px] top-[-15px] text-3xl rotate-[5deg]" />{' '}
					Gyakran ismételt kérdések
				</h1>
				<div className="flex flex-col jsutify-center items-center">
					{data.map((question) => (
						<FaqQuestion
							key={question.question}
							{...question}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Faq;
