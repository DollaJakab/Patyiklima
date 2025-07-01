import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FaqQuestion = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="p-3 text-gray-900 border-1 border-gray-400 not-last:border-b-0 max-w-1/2">
			<h1
				onClick={() => setIsOpen(!isOpen)}
				className="hover: cursor-pointer flex items-center gap-3 text-lg font-bold"
			>
				{isOpen ? <FaMinus /> : <FaPlus />}
				{question}
			</h1>
			<div
				className={`transition-all duration-300 ease-in-out overflow-hidden ${
					isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
				}`}
			>
				<p className="pl-9 text-gray-600">{answer}</p>
			</div>
		</div>
	);
};

export default FaqQuestion;
