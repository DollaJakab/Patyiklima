import React from 'react';
import FaqQuestion from './FaqQuestion';

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
		<div className="flex">
			<div className="mb-10 flex flex-col justify-center items-start ml-5 mt-5 gap-0">
				{data.map((question) => (
					<FaqQuestion
						key={question.question}
						{...question}
					/>
				))}
			</div>
		</div>
	);
};

export default Faq;
