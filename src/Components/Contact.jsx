import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { SyncLoader } from 'react-spinners';

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
	const [capVal, setCapVal] = useState(null);
	const [isSent, setIsSent] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(schema),
		shouldUseNativeValidation: true,
	});
	const onSubmit = async (data) => {
		setIsLoading(true);
		try {
			const res = await fetch(import.meta.env.VITE_API_URL, {
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
			if (res.ok) {
				setIsLoading(false);
				setIsSent(true);
			}
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	return (
		<div
			id="contact"
			className="flex relative flex-col items-center justify-center min-h-[50vh] bg-gray-100 md:py-10"
		>
			{isSent ? (
				<h1 className="relative text-xl md:text-4xl font-bold text-gray-900 bg-white mx-10 p-5 md:p-10 rounded-xl drop-shadow-md">
					<p className="text-3xl md:text-4xl absolute top-[-20px] left-[-20px] rotate-[-15deg]">✅</p>
					Elküldtük megkeresésed! Hamarosan felvesszük veled a kapcsolatot!
				</h1>
			) : isLoading ? (
				<SyncLoader color="#39ace7" />
			) : (
				<form
					className={`bg-white p-6 relative  rounded-2xl shadow-md md:w-[70vw]  space-y-4 ${
						isLoading && 'blur-xs'
					}`}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h2 className="text-2xl font-semibold text-center mb-4">Kapcsolatfelvétel</h2>
					<label htmlFor="name">
						Név<span className="text-red-500">*</span>
					</label>

					<input
						id="name"
						type="text"
						placeholder="Teljes név"
						{...register('name')}
						className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
					<label htmlFor="email">
						E-mail cím<span className="text-red-500">*</span>
					</label>
					<input
						id="email"
						type="text"
						placeholder="E-mail cím"
						{...register('email')}
						className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
					<label htmlFor="mobileNumber">
						Telefonszám<span className="text-red-500">*</span>
					</label>
					<input
						id="mobileNumber"
						type="text"
						placeholder="Telefonszám"
						{...register('mobileNumber')}
						className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
					<label htmlFor="zip">
						Irányítószám<span className="text-red-500">*</span>
					</label>
					<input
						max={4}
						maxLength={4}
						id="zip"
						type="text"
						placeholder="Irányítószám"
						{...register('zip')}
						className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
					<label htmlFor="message">Üzenet</label>

					<textarea
						placeholder="Üzenet"
						{...register('message')}
						className="w-full border border-gray-300 rounded-md focus:border-1 active:border-1 p-3"
						id="message"
					/>
					<div className="flex md:flex-row flex-col gap-10 justify-center items-center">
						<span className="flex  gap-2">
							<input
								{...register('afsz')}
								type="checkbox"
							/>
							<p>
								Elolvastam és elfogadom az&nbsp;
								<Link
									className="text-blue-500 underline"
									to={'/afsz'}
									target="_blank"
									rel="noopener noreferrer"
								>
									adatvédelmi nyilatkozatot.
								</Link>
								<span className="text-red-500">*</span>
							</p>
						</span>
						<ReCAPTCHA
							onChange={(value) => {
								setCapVal(true);
							}}
							sitekey={import.meta.env.VITE_SITE_KEY}
						/>
					</div>

					<button
						type="submit"
						disabled={capVal != true}
						className="disabled:bg-gray-200 w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition"
					>
						Küldés
					</button>
				</form>
			)}
		</div>
	);
}
