import React from 'react';

const Prices = () => {
	return (
		<div
			id="prices"
			className=" bg-[#0784b5] flex flex-col items-center px-3  py-12"
		>
			<h1 className="text-3xl font-bold mb-8 text-white">💸 Klímatisztítás árlista</h1>
			<div className="overflow-x-auto w-full max-w-2xl">
				<table className="w-full table-fixed border-collapse rounded-lg overflow-hidden shadow-lg bg-white text-gray-800">
					<thead>
						<tr className="bg-[#39ace7] text-white">
							<th className="px-4 py-4 text-center font-semibold">Mennyiség</th>
							<th className="px-4 py-4 text-center font-semibold">Ár</th>
							<th className="px-4 py-4 text-center font-semibold">Ár/db</th>
						</tr>
					</thead>
					<tbody>
						<tr className="even:bg-[#eaf6fb] odd:bg-white">
							<td className="px-4 py-4 text-center">1 db klíma</td>
							<td className="px-4 py-4 text-center">20.000 Ft</td>
							<td className="px-4 py-4 text-center">20.000 Ft/db</td>
						</tr>
						<tr className="even:bg-[#eaf6fb] odd:bg-white">
							<td className="px-4 py-4 text-center">2 db klíma</td>
							<td className="px-4 py-4 text-center">35.000 Ft</td>
							<td className="px-4 py-4 text-center">17.500 Ft/db</td>
						</tr>
						<tr className="even:bg-[#eaf6fb] odd:bg-white">
							<td className="px-4 py-4 text-center">3 db klíma</td>
							<td className="px-4 py-4 text-center">50.000 Ft</td>
							<td className="px-4 py-4 text-center">16.667 Ft/db</td>
						</tr>
						<tr className="even:bg-[#eaf6fb] odd:bg-white">
							<td className="px-4 py-4 text-center">4 db-tól</td>
							<td className="px-4 py-4 text-center">-</td>
							<td className="px-4 py-4 text-center">15.000 Ft/db</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Prices;
