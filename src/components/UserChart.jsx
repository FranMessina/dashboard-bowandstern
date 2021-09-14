import React from "react";

function UserChart({ info }) {
	return (
		<section className='container mx-auto p-6 font-mono'>
			<div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
				<div className='w-full overflow-x-auto'>
					<table className='w-full'>
						<thead>
							<tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
								<th className='px-4 py-3'>Name</th>
								<th className='px-4 py-3'>Email</th>
								<th className='px-4 py-3'>joined</th>
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
													src='https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
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
										<span className='px-2 py-1 font-semibold  text-md'>
											{a.email}
										</span>
									</td>
									<td className='px-4 py-3 text-sm border'>{a.createdAt}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}

export default UserChart;
