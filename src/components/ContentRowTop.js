import ContentRowInfo from "./ContentRowInfo";
import ContentRowCenter from "./ContentRowCenter";
import Chart from "./Chart";

function ContentRowTop() {
	return (
		<>
			<div className='container-fluid'>
				<div className='d-sm-flex aligns-items-center justify-content-between mb-4'>
					<h1 className='h3 mb-0 text-gray-800'>Bow & Stern Dashboard</h1>
				</div>

				{/*<!-- Content Row Info-->*/}
				<ContentRowInfo />
				<ContentRowCenter />
				<Chart />
			</div>
		</>
	);
}

export default ContentRowTop;
