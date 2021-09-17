import React, { useState, useEffect } from "react";
import BoatChart from "../components/BoatChart";

function Boats() {
	const [boats, setBoats] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getBoats() {
			const response = await fetch("http://localhost:3000/api/boat")
				.then(res => res.json())
				.catch(err => console.log(err));
			setBoats(response.data.boats);
			setLoading(false);

			return response;
		}
		getBoats();
	}, []);

	if (loading) {
		return (
			<div className='widthCalc grid max-w-7xl grid-cols-1 mx-auto gap-6 md:grid-cols-3 items-start flex-grow p-8 relative right-0'>
				LOADING..
			</div>
		);
	}

	return (
		<div className='widthCalc'>
			<BoatChart info={boats} />
		</div>
	);
}

export default Boats;
