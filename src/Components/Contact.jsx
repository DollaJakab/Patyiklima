import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';

const schema = z.object({
	name: z.string().nonempty({ message: 'Required' }),
	email: z.string().nonempty({ message: 'Required' }),
	mobileNumber: z
		.string()
		.nonempty({ message: 'Required' })
		.min(6, { message: 'Legalább 6 hosszúnak kell lennie' })
		.max(12, { message: 'Legfeljebb 12 hosszú lehet' }),
	zip: z.string().nonempty({ message: 'Required' }).min(4, { message: 'Legalább 4 hosszúnak kell lennie' }),
	afsz: z.boolean().refine((val) => val === true, {
		message: 'Must be true',
	}),
	message: z.string(),
});

export default function Contact() {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(schema),
		shouldUseNativeValidation: true,
	});
	const onSubmit = (data) =>
		fetch('http://localhost:3001/api/send-email', {
			method: 'POST',
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				mobileNumber: data.mobileNumber,
				zip: data.zip,
				message: data.message,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

	return (
		<div
			id="contact"
			className="flex items-center justify-center min-h-[50vh] bg-gray-100 py-10"
		>
			<form
				className="bg-white p-6 rounded-2xl shadow-md w-[50vw]  space-y-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="text-2xl font-semibold text-center mb-4">Kapcsolatfelvétel</h2>
				<label htmlFor="name">Név</label>

				<input
					id="name"
					type="text"
					placeholder="Teljes név"
					{...register('name')}
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
				<label htmlFor="email">E-mail cím</label>
				<input
					id="email"
					type="text"
					placeholder="E-mail cím"
					{...register('email')}
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
				<label htmlFor="mobileNumber">Telefonszám</label>
				<input
					id="mobileNumber"
					type="text"
					placeholder="Telefonszám"
					{...register('mobileNumber')}
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
				<label htmlFor="zip">Irányítószám</label>
				<input
					max={4}
					maxLength={4}
					id="zip"
					type="text"
					placeholder="Irányítószám"
					{...register('zip')}
					className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
				<textarea
					{...register('message')}
					className="w-full border border-gray-300 rounded-md focus:border-1 active:border-1 p-3"
					id="message"
				/>
				<div className="flex gap-3">
					<input
						{...register('afsz')}
						type="checkbox"
					/>
					<p>
						Elolvastam és elfogadom az{' '}
						<Link
							className="text-blue-500 underline"
							to={'/afsz'}
							target="_blank"
							rel="noopener noreferrer"
						>
							adatvédelmi nyilatkozatot.
						</Link>
					</p>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition"
				>
					Küldés
				</button>
			</form>
		</div>
	);
}
