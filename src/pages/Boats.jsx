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
	return <BoatChart info={boats} />;
}

export default Boats;
