import { NotificationsNone } from "@material-ui/icons";
import React from "react";

function Topbar() {
	return (
		<div className='w-full bg-gray-100 h-14 sticky top-0 flex justify-between p-5 items-center z-50 border-b border-gray-300'>
			<div className='text-blue-400 font-semibold text-xl'>Bow&Stern</div>
			<div>
				<NotificationsNone />
			</div>
		</div>
	);
}

export default Topbar;
