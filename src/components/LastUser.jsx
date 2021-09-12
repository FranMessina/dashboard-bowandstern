import React from "react";

function LastUser({ info }) {
	return (
		<>
			<div className='col-span-1  bg-gray-200 shadow-md p-2 rounded-md flex flex-col items-start relative'>
				<div className='flex justify-between w-full flex-wrap'>
					<span className='text-xl ml-2'>Newest User</span>

					<hr className='w-full border border-gray-400 ' />
				</div>
				<div className='flex'>
					<div className='flex flex-col mt-4 ml-6'>
						<span>
							Full name: <br />{" "}
							<span className='font-semibold'>{`${info.name} ${info.lastname}`}</span>
						</span>

						<span>
							Email: <br /> <span className='font-semibold'>{info.email}</span>
						</span>
						<button className='lg:absolute px-2 mt-4 h-8 bg-blue-400 rounded-md md:right-5 md:bottom-2'>
							All Users
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default LastUser;
