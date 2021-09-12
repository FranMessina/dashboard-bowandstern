import { DirectionsBoatOutlined, Explore, Person } from "@material-ui/icons";
import React from "react";

function StatCard({ title, stat, icon }) {
	let dispIcon;
	if (icon === "boat") {
		dispIcon = <DirectionsBoatOutlined className='text-blue-800 ml-5' />;
	} else if (icon === "location") {
		dispIcon = <Explore className='text-blue-800 ml-5' />;
	} else {
		dispIcon = <Person className='text-blue-800 ml-5' />;
	}

	return (
		<div className=' h-24 bg-gray-100 shadow-md p-2 rounded-md flex items-center transition-transform duration-300 transform hover:scale-105 cursor-default border-b-4 border-green-600'>
			{dispIcon}
			<span className='text-xl ml-4'>{title}</span>
			<span className='text-2xl font-semibold ml-auto mr-4'>{stat}</span>
		</div>
	);
}

export default StatCard;
