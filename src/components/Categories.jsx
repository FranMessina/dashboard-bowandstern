import React from "react";

function Categories({ info }) {
	return (
		<div className='col-span-1 md:col-span-3 bg-gray-200 p-4 rounded-md shadow-xl'>
			<span className='text-xl font-semibold'>Locations</span>
			<hr className='mb-4 mt-1 border border-gray-400' />
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 '>
				{info.map(a => (
					<div className='flex flex-col items-start justify-between bg-blue-200 p-4 text-center rounded-md hover:bg-blue-400 cursor-pointer transition-all duration-300 ease-out'>
						<span className='font-semibold '>{a.location}</span>

						<div className='self-end flex items-end'>
							<span className='text-lg mr-2'>Number of boats:</span>
							<span className='text-2xl '>{a.numberOfBoats}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Categories;
