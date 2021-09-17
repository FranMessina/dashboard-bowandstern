import React from "react";

function BoatChart({ info }) {
	return (
		<section className='container mx-auto p-6 font-mono'>
			<div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
				<div className='w-full overflow-x-auto'>
					<table className='w-full'>
						<thead>
							<tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
								<th className='px-4 py-3'>Name</th>
								<th className='px-4 py-3'>Location</th>
								<th className='px-4 py-3'>Date</th>
								{/* <th className='px-4 py-3'>ACTIONS</th> */}
							</tr>
						</thead>
						<tbody className='bg-white'>
							{info.map(a => (
								<tr className='text-gray-700'>
									<td className='px-4 py-3 border'>
										<div className='flex items-center text-sm'>
											<div className='relative w-8 h-8 mr-3 rounded-full md:block'>
												<img
													className='object-cover w-full h-full rounded-full'
													src='1.jpg'
													alt=''
													loading='lazy'
												/>
												<div
													className='absolute inset-0 rounded-full shadow-inner'
													aria-hidden='true'></div>
											</div>
											<div>
												<p className='font-semibold text-black'>{a.name}</p>
												<p className='text-xs text-gray-600'>{a.title}</p>
											</div>
										</div>
									</td>
									<td className='px-4 py-3 border'>
										<span className='px-2 py-1 font-semibold text-md'>
											{a.location.location}
										</span>
									</td>
									<td className='px-4 py-3 text-sm border italic font-semibold'>
										{a.year}
									</td>
									{/* <td className='w-44 py-3 text-sm border '>
										<div className='mx-auto flex justify-start gap-5'>
											<button className='bg-yellow-200 px-3 py-1 rounded-sm bg-opacity-50 text-yellow-500 ml-4'>
												EDIT
											</button>
											<button className='bg-red-300 px-3 py-1 rounded-sm bg-opacity-50 text-red-600'>
												DELETE
											</button>
										</div>
									</td> */}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}

export default BoatChart;
