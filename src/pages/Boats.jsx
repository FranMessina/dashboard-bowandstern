import React, { useState, useEffect } from "react";
import BoatChart from "../components/BoatChart";

function Boats() {
	const [boats, setBoats] = useState([]);

	useEffect(() => {
		async function getBoats() {
			const response = await fetch("http://localhost:3000/api/boat")
				.then(res => res.json())
				.catch(err => console.log(err));
			setBoats(response.data.boats);

			return response;
		}
		getBoats();
	}, []);

	return (
		<div className='widthCalc'>
			<BoatChart info={boats} />
		</div>
	);
}

export default Boats;
