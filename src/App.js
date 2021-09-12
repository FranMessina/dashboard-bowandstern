import { Route, Switch } from "react-router";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Boats from "./pages/Boats";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
	return (
		<div className='select-none'>
			<Topbar />
			<div className='w-full flex'>
				<Sidebar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/users'>
						<Users />
					</Route>
					<Route path='/boats'>
						<Boats />
					</Route>
					<Route path='/new-product'>
						<Create />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
