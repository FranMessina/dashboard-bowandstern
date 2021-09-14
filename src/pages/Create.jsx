import React from "react";

function Create() {
	return (
		<div className='widthCalc'>
			<div className='w-5/6 mx-auto'>
				<div className='flex justify-center items-start w-full'>
					<form className='w-full max-w-lg mt-10 ml-2'>
						<div className='flex flex-wrap -mx-3 mb-6'>
							<div className='w-full px-3 mb-6 md:mb-0'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
									for='grid-first-name'>
									Name
								</label>
								<input
									className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
									id='grid-first-name'
									type='text'
									placeholder='Sea Strider'
								/>
								<p className='text-red-500 text-xs italic'>
									Please fill out this field.
								</p>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3 mb-6'>
							<div className='w-full px-3'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
									for='description'>
									Description
								</label>
								<textarea
									className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='description'></textarea>
								<p className='text-gray-600 text-xs italic'>
									Make it as long and as crazy as you'd like
								</p>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3 mb-6'>
							<div className='w-full px-3'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
									for='shortDesc'>
									Short Description
								</label>
								<textarea
									className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='shortDesc'></textarea>
								<p className='text-gray-600 text-xs italic'>Keep it short!</p>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3 mb-2'>
							<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
									for='img'>
									Images
								</label>
								<input
									className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='img'
									type='file'
								/>
							</div>
							<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
									for='vessel-type'>
									Vessel Type
								</label>
								<div className='relative'>
									<select
										className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
										id='vessel-type'
										name='type'>
										<option value='monohull'>Monohull</option>
										<option value='catamaran'>Catamaran</option>
										<option value='yatch'>Yatch</option>
									</select>
									<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
										<svg
											className='fill-current h-4 w-4'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'>
											<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
										</svg>
									</div>
								</div>
							</div>
							<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
									for='year'>
									Manufacture Yaer
								</label>
								<input
									className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='year'
									type='text'
									name='year'
									placeholder='1980'
								/>
							</div>
							<button
								type='submit'
								className='w-full bg-blue-400 mx-3 mt-5 py-2 rounded-md bg-opacity-60 text-xl hover:bg-opacity-90'>
								CREATE PRODUCT
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Create;
