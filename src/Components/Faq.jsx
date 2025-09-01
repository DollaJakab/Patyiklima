import React from 'react';
import FaqQuestion from './FaqQuestion';
import { LuMessageCircleQuestion } from 'react-icons/lu';

const Faq = () => {
	const data = [
		{
			question: 'Milyen gyakran kell klímát tisztítani?',
			answer: 'A klíma rendszeres tisztítása megakadályozza a baktériumok, penész és kellemetlen szagok kialakulását, így egészségesebb levegőt biztosít. Javítja a készülék hatékonyságát, csökkenti az áramfogyasztást és meghosszabbítja az élettartamát. A beltéri és a kültérit  egységet 1–2 évente egyszer érdemes kitisztítani.',
		},
		{
			question: 'Mennyi ideig tart egy tisztítás?',
			answer: 'Körülbelül 20-30 perc. Bonyolultabb esetekben 30-45 percet is igénybe vehet. Ez függ a klíma méretétől, helyzetétől és a szennyezettség mértékétől.',
		},
	];
	return (
		<div className="flex justify-center items-center bg-[#0784b5]">
			<div className="my-3 flex flex-col justify-center items-center p-3 gap-3">
				<h1 className="font-semibold text-lg md:text-2xl text-gray-100 relative">
					<LuMessageCircleQuestion className="hidden absolute right-[-35px] top-[-15px] text-3xl rotate-[5deg]" />{' '}
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
