import React from "react";

function Categories({ info }) {
	return (
		<div className='col-span-1 md:col-span-3 bg-red-500 p-4 rounded-md '>
			<span className='text-xl font-semibold'>Locations</span>
			<hr className='mb-4 mt-1' />
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
				{info.map(a => (
					<div className='bg-gray-300 p-4 text-center rounded-md'>{a}</div>
				))}
			</div>
		</div>
	);
}

export default Categories;
