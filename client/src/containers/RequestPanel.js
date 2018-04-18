import React from "react";
import { connect } from "react-redux";

import { toggleShowCards } from "../actions/index";

import RequestHeader from "../components/Requests/RequestHeader";
import RequestItem from "./RequestItem";
import RequestFilters from "../components/Requests/RequestFilters";

let RequestPanel = ({requestIds, showCards, toggleShowCards}) => {
	console.log("RENDER: RequestPanel", requestIds);
	return (
		<div className="RequestPanelContainer">
			<RequestFilters
				showCards={showCards}
				toggleShowCards={toggleShowCards}
			/>
			<div className="RequestPanel">
				<RequestHeader
					showCards={showCards}
				/>
				{
					requestIds.map((id, index) => (
						<RequestItem
							id={id}
							key={id}
							index={index}
						/>
					))
				}
			</div>
		</div>

	);
};

let mapStateToProps = (state) => {
	console.log("MapSta: RequestPanel");

	return {
		requestIds: state.requests.array.map(req => req.id),
		showCards: state.requests.showCards,
		requests: state.requests.array
	};
};


export default connect(mapStateToProps, {toggleShowCards})(RequestPanel);