import React, { useState, useEffect } from "react";
import UserChart from "../components/UserChart";

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function getUsers() {
			const response = await fetch("http://localhost:3000/api/user")
				.then(res => res.json())
				.catch(err => console.log(err));
			setUsers(response.data.users);

			return response;
		}
		getUsers();
	}, []);
	return (
		<div className='widthCalc'>
			<UserChart info={users} />
		</div>
	);
}

export default Users;
