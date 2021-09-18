import React, { useState, useEffect } from "react";
import UserChart from "../components/UserChart";
import { CircularProgress } from "@material-ui/core";
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
			<div className='widthCalc flex max-w-7xl mx-auto  items-center justify-center flex-grow p-8 relative right-0'>
				<CircularProgress />
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
