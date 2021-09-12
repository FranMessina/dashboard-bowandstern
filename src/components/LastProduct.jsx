import React from "react";

function LastProduct({ info }) {
	return (
		<>
			<div className='col-span-1 md:col-span-2 bg-gray-200 shadow-md p-2 rounded-md flex flex-col items-start flex-grow'>
				<div className='flex justify-between w-full flex-wrap'>
					<span className='text-xl ml-2'>Newest Boat</span>
					<span className='text-xl font-semibold mr-2'>{info.name}</span>
					<hr className='w-full border border-gray-400 ' />
				</div>
				<div className='flex w-full'>
					<img
						src='3.jpg'
						alt='boat-main-img'
						className='w-1/2 m-4 rounded-md shadow-sm hidden sm:block'
					/>
					<div className='w-5/6 mx-auto grid grid-cols-2 gap-2 justify-between sm:flex-col mt-4'>
						<span>
							Location: <br />
							<span className='font-semibold'>{info.location}</span>
						</span>
						<span>
							Price: <span className='font-semibold'>${info.price}</span>
						</span>

						<button className='mt-auto mb-6 bg-blue-400 px-2 py-1 rounded-md self-end col-span-2'>
							All Boats
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default LastProduct;
