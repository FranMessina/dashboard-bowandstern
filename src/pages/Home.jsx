import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import LastProduct from "../components/LastProduct";
import LastUser from "../components/LastUser";
import StatCard from "../components/StatCard";

async function getData(setLocations, setBoats, setUsers, setLoading) {
	const locations = await fetch("http://localhost:3000/api/boat/locations")
		.then(res => res.json())
		.catch(err => console.log(err));
	setLocations(locations.data.locations);

	const boats = await fetch("http://localhost:3000/api/boat")
		.then(res => res.json())
		.catch(err => console.log(err));
	setBoats(boats.data);

	const users = await fetch("http://localhost:3000/api/user")
		.then(res => res.json())
		.catch(err => console.log(err));
	setUsers(users.data);
	setLoading(false);

	return;
}

function Home() {
	const [loading, setLoading] = useState(true);
	const [locations, setLocations] = useState([]);
	const [boats, setBoats] = useState({});
	const [users, setUsers] = useState({});

	useEffect(() => {
		getData(setLocations, setBoats, setUsers, setLoading);
	}, []);

	if (loading) {
		return (
			<div className='widthCalc flex max-w-7xl mx-auto  items-center justify-center flex-grow p-8 relative right-0'>
				<CircularProgress />
			</div>
		);
	}

	return (
		<div className='widthCalc grid max-w-7xl grid-cols-1 mx-auto gap-6 md:grid-cols-3 items-start flex-grow p-8 relative right-0'>
			<StatCard title='Boats' stat={boats.count} icon='boat' />
			<StatCard title='Locations' stat={locations.length} icon='location' />
			<StatCard title='Users' stat={users.count} icon='user' />
			<LastProduct info={boats.boats[boats.boats.length - 1]} />
			<LastUser info={users.users[users.users.length - 1]} />
			{locations && <Categories info={locations} />}
		</div>
	);
}

export default Home;
