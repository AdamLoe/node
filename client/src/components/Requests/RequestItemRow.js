import React from "react";

export default ({
	date, name, unitname, requestorName, nextApprover, description,

}) => {
	return (
		<div className="RequestRow">
			<div className="RequestColumn">
				{ date }
			</div>
			<div className="RequestColumn">
				{ name }
			</div>
			<div className="RequestColumn">
				{ unitname }
			</div>
			<div className="RequestColumn">
				{ requestorName }
			</div>
			<div className="RequestColumn">
				{nextApprover}
			</div>
		</div>
	);
}
