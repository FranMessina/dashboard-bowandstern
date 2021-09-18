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
		setOpen(!open);
	};

	return (
		<>
			<div
				className={
					open
						? "bg-gray-100 w-44 heightCalc flex flex-col px-5 items-center justify-start transition-all duration-200 fixed left-0 top-14  z-40 shadow-lg select-none"
						: "bg-gray-100 w-10 heightCalc flex flex-col items-center justify-start fixed top-14 left-0 transition-all duration-200  z-40 shadow-md select-none "
				}>
				{!open ? (
					<Menu
						className={
							open
								? "mt-4 mb-6 ml-auto transition-all duration-300 cursor-pointer"
								: "mt-4 mb-6 transition-all duration-300 cursor-pointer"
						}
						onClick={toggleMenu}
					/>
				) : (
					<Close
						className={
							open
								? "mt-4 mb-6 ml-auto transition-all duration-300 cursor-pointer"
								: "mt-4 mb-6 transition-all duration-300 cursor-pointer"
						}
						onClick={toggleMenu}
					/>
				)}

				<Link to='/'>
					<div
						className={
							open
								? "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 hover:bg-gray-300 cursor-pointer"
								: "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 cursor-pointer"
						}>
						<Home
							className={
								open
									? "mr-4 text-gray-400 group-hover:text-black"
									: " text-gray-400 hover:text-black "
							}
						/>
						<span className={open ? "" : "hidden transition-all duration-300"}>
							Home
						</span>
					</div>
				</Link>
				<Link to='/users'>
					<div
						className={
							open
								? "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 hover:bg-gray-300 cursor-pointer transition duration-200"
								: "group flex items-center justify-between mt-4 rounded-xl px-3 py-1  cursor-pointer transition duration-200"
						}>
						<Rowing
							className={
								open
									? "mr-4 text-gray-400 group-hover:text-black transition duration-200"
									: " text-gray-400 hover:text-black transition duration-200"
							}
						/>
						<span className={open ? "" : "hidden transition-all duration-300"}>
							Users
						</span>
					</div>
				</Link>
				<Link to='/boats'>
					<div
						className={
							open
								? "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 hover:bg-gray-300 cursor-pointer transition duration-200"
								: "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 cursor-pointer transition duration-200"
						}>
						<DirectionsBoat
							className={
								open
									? "mr-4 text-gray-400 group-hover:text-black transition duration-200"
									: "text-gray-400 hover:text-black transition duration-200"
							}
						/>
						<span className={open ? "" : "hidden transition-all duration-300"}>
							Boats
						</span>
					</div>
				</Link>
				{/* <Link to='/new-product'>
					<div
						className={
							open
								? "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 hover:bg-gray-300 cursor-pointer transition duration-200"
								: "group flex items-center justify-between mt-4 rounded-xl px-3 py-1 cursor-pointer transition duration-200"
						}>
						<Add
							className={
								open
									? "mr-4 text-gray-400 group-hover:text-black transition duration-200"
									: "text-gray-400 hover:text-black transition duration-200"
							}
						/>
						<span className={open ? "" : "hidden transition-all duration-300"}>
							Create
						</span>
					</div>
				</Link> */}
			</div>
			{open && (
				<div className='bg-gray-700 bg-opacity-20 w-screen heightCalc z-20 absolute top-14'></div>
			)}
		</>
	);
}
