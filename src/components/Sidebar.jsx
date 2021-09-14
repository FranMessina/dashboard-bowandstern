import {
	Add,
	Close,
	DirectionsBoat,
	Home,
	Menu,
	Rowing,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	const [open, setOpen] = useState(false);
	const toggleMenu = () => {
		if (open) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

	return (
		<>
			<div
				className={
					open
						? "bg-gray-100 w-44 heightCalc flex flex-col px-5 items-start justify-start transition-all duration-200 sticky left-0 top-14 xl:px-5 xl:w-44 xl:items-center z-40 shadow-lg select-none"
						: "bg-gray-100 w-10 heightCalc flex flex-col items-center justify-start sticky top-14 left-0 transition-all duration-200 xl:items-center xl:w-44 xl:px-5 z-40 shadow-md select-none flex-[1]"
				}>
				{!open ? (
					<Menu
						className={
							open
								? "mt-4 mb-6 xl:opacity-0 xl:mt-0 ml-auto transition-all duration-300 cursor-pointer"
								: "mt-4 mb-6 xl:opacity-0 xl:mt-0 transition-all duration-300 cursor-pointer"
						}
						onClick={toggleMenu}
					/>
				) : (
					<Close
						className={
							open
								? "mt-4 mb-6 xl:opacity-0 xl:mt-0 ml-auto transition-all duration-300 cursor-pointer"
								: "mt-4 mb-6 xl:opacity-0 xl:mt-0 transition-all duration-300 cursor-pointer"
						}
						onClick={toggleMenu}
					/>
				)}

				<Link to='/'>
					<div
						className={
							open
								? "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 hover:bg-gray-300 cursor-pointer"
								: "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 xl:hover:bg-gray-300 cursor-pointer"
						}>
						<Home
							className={
								open
									? "mr-4 text-gray-400 group-hover:text-black"
									: "xl:mr-4 text-gray-400 hover:text-black xl:group-hover:text-black"
							}
						/>
						<span
							className={
								open ? "" : "hidden xl:inline transition-all duration-300"
							}>
							Home
						</span>
					</div>
				</Link>
				<Link to='/users'>
					<div
						className={
							open
								? "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 hover:bg-gray-300 cursor-pointer transition duration-200"
								: "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 xl:hover:bg-gray-300 cursor-pointer transition duration-200"
						}>
						<Rowing
							className={
								open
									? "mr-4 text-gray-400 group-hover:text-black transition duration-200"
									: "xl:mr-4 text-gray-400 hover:text-black xl:group-hover:text-black transition duration-200"
							}
						/>
						<span
							className={
								open ? "" : "hidden xl:inline transition-all duration-300"
							}>
							Users
						</span>
					</div>
				</Link>
				<Link to='/boats'>
					<div
						className={
							open
								? "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 hover:bg-gray-300 cursor-pointer transition duration-200"
								: "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 xl:hover:bg-gray-300 cursor-pointer transition duration-200"
						}>
						<DirectionsBoat
							className={
								open
									? "mr-4 text-gray-400 group-hover:text-black transition duration-200"
									: "xl:mr-4 text-gray-400 hover:text-black xl:group-hover:text-black transition duration-200"
							}
						/>
						<span
							className={
								open ? "" : "hidden xl:inline transition-all duration-300"
							}>
							Boats
						</span>
					</div>
				</Link>
				<Link to='/new-product'>
					<div
						className={
							open
								? "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 hover:bg-gray-300 cursor-pointer transition duration-200"
								: "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 xl:hover:bg-gray-300 cursor-pointer transition duration-200"
						}>
						<Add
							className={
								open
									? "mr-4 text-gray-400 group-hover:text-black transition duration-200"
									: "xl:mr-4 text-gray-400 hover:text-black xl:group-hover:text-black transition duration-200"
							}
						/>
						<span
							className={
								open ? "" : "hidden xl:inline transition-all duration-300"
							}>
							Create
						</span>
					</div>
				</Link>
			</div>
			{open && (
				<div className='bg-gray-700 bg-opacity-20 w-screen heightCalc z-20 absolute top-14 xl:hidden'></div>
			)}
		</>
	);
}
