import React from "react";
import BoatChart from "../components/BoatChart";

function Boats() {
	const boats = [
		{
			name: "Searider",
			price: 650,
			location: "Long Beach",
		},
		{
			name: "Searider",
			price: 650,
			location: "Long Beach",
		},
		{
			name: "Searider",
			price: 650,
			location: "Long Beach",
		},
	];
	return (
		<div className='widthCalc'>
			<BoatChart info={boats} />
		</div>
	);
}

export default Boats;
