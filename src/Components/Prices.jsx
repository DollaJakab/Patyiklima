import React from 'react';

const Prices = () => {
	return (
		<div className="h-screen bg-[#0784b5] flex flex-col items-center  py-12">
			<h1 className="text-3xl font-bold mb-8 text-white">💸 Klímatisztítás árlista</h1>
			<div className="overflow-x-auto w-full max-w-2xl">
				<table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-lg bg-white text-gray-800">
					<thead>
						<tr className="bg-[#39ace7] text-white">
							<th className="px-6 py-4 text-left font-semibold">Mennyiség</th>
							<th className="px-6 py-4 text-left font-semibold">Ár</th>
							<th className="px-6 py-4 text-left font-semibold">Ár/db</th>
						</tr>
					</thead>
					<tbody>
						<tr className="even:bg-[#eaf6fb] odd:bg-white">
							<td className="px-6 py-4">1 db klíma</td>
							<td className="px-6 py-4">20.000 Ft</td>
							<td className="px-6 py-4">20.000 Ft/db</td>
						</tr>
						<tr className="even:bg-[#eaf6fb] odd:bg-white">
							<td className="px-6 py-4">2 db klíma</td>
							<td className="px-6 py-4">35.000 Ft</td>
							<td className="px-6 py-4">17.500 Ft/db</td>
						</tr>
						<tr className="even:bg-[#eaf6fb] odd:bg-white">
							<td className="px-6 py-4">3 db klíma</td>
							<td className="px-6 py-4">50.000 Ft</td>
							<td className="px-6 py-4">16.667 Ft/db</td>
						</tr>
						<tr className="even:bg-[#eaf6fb] odd:bg-white">
							<td className="px-6 py-4">4 db-tól</td>
							<td className="px-6 py-4">-</td>
							<td className="px-6 py-4">15.000 Ft/db</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Prices;
