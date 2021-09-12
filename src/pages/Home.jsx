import React from "react";
import Categories from "../components/Categories";
import LastProduct from "../components/LastProduct";
import LastUser from "../components/LastUser";
import StatCard from "../components/StatCard";

function Home() {
	const boat = {
		name: "Searider",
		price: 650,
		location: "Long Beach",
	};
	const user = {
		name: "Jonathan",
		lastname: "Masters",
		email: "johnmasters@gmail.com",
	};

	const locations = ["Miami", "Long Beach", "Caribe", "Mediterranean"];
	return (
		<div className='w-full grid max-w-7xl grid-cols-1 mx-auto gap-3 md:grid-cols-3 items-start flex-grow p-8'>
			<StatCard title='Boats' stat={40} icon='boat' />
			<StatCard title='Locations' stat={35} icon='location' />
			<StatCard title='Users' stat={60} icon='user' />
			<LastProduct info={boat} />
			<LastUser info={user} />
			<Categories info={locations} />
		</div>
	);
}

export default Home;
