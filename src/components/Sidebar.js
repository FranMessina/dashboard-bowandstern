import image from "../assets/images/logoBlanco.png";
import { Link, Route, Switch } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import NotFound from "./NotFound";

function Sidebar() {
	return (
		<>
			<ul
				className='navbar-nav bg-info sidebar sidebar-dark accordion'
				id='accordionSidebar'>
				<a
					className='sidebar-brand d-flex align-items-center justify-content-center h-25'
					href='/'>
					<div className='sidebar-brand-icon'>
						<img className='w-100' src={image} alt='' />
					</div>
				</a>

				<li className='nav-item'>
					<Link className='nav-link' to='/Boats'>
						<i className='fas fa-fw fa-ship'></i>
						<span>Boats</span>
					</Link>
				</li>
				<hr className='sidebar-divider my-0' />
				<li className='nav-item'>
					<Link className='nav-link' to='/LastMovieInDb'>
						<i className='fas fa-fw fa-map'></i>
						<span>Locations</span>
					</Link>
				</li>
				<hr className='sidebar-divider my-0' />
				<li className='nav-item'>
					<Link className='nav-link' to='/ContentRowMovies'>
						<i className='fas fa-fw fa-exclamation'></i>
						<span>Newest Boat</span>
					</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path='/'>
					<ContentWrapper />
				</Route>
				<Route path='/Boats'></Route>
				<Route path='/LastBoat'></Route>
				<Route path='/LastUser'></Route>
				<Route component={NotFound} />
			</Switch>
		</>
	);
}

export default Sidebar;
