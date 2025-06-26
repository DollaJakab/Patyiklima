import React from 'react';
import FaqQuestion from './FaqQuestion';

const Faq = () => {
	const data = [
		{
			question: 'Milyen gyakran kell klímát tisztítani?',
			answer: 'soha',
		},
		{
			question: 'Mennyi ideig tart egy tisztítás?',
			answer: 'Soha',
		},
		{
			question: 'Otthon kell tartózkodni?',
			answer: 'Soha',
		},
		{
			question: 'Milyen garanciát vállaltok?',
			answer: 'Soha',
		},
	];
	return (
		<div className="mb-10 flex flex-col justify-center items-start ml-5 mt-5 gap-0">
			{data.map((question) => (
				<FaqQuestion
					key={question.question}
					{...question}
				/>
			))}
		</div>
	);
};

export default Faq;
