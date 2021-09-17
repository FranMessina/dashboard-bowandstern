import React, { useState, useEffect } from "react";
import UserChart from "../components/UserChart";

function Users() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getUsers() {
			const response = await fetch("http://localhost:3000/api/user")
				.then(res => res.json())
				.catch(err => console.log(err));
			setUsers(response.data.users);
			setLoading(false);
			return response;
		}
		getUsers();
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
			<UserChart info={users} />
		</div>
	);
}

export default Users;
