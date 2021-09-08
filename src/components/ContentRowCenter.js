import React from "react";
import LastBoat from "./LastBoat";
import Locations from "./Locations";

function ContentRowCenter() {
	return (
		<div className='row'>
			{/*<!-- Last Movie in DB -->*/}
			<LastBoat />
			{/*<!-- End content row last movie in Data Base -->*/}

			{/*<!-- Genres in DB -->*/}
			<Locations />
		</div>
	);
}

export default ContentRowCenter;
