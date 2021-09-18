import React, { useState, useEffect } from "react";
import BoatChart from "../components/BoatChart";
import { CircularProgress } from "@material-ui/core";
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
			<div className='widthCalc flex max-w-7xl mx-auto  items-center justify-center flex-grow p-8 relative right-0'>
				<CircularProgress />
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
