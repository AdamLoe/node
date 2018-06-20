import React from "react";
import {connect} from "react-redux";

import urls from "../../helpers/urls";

import { toggleSettings } from "../../actions/index";

let SettingsPanel = ({nickName, fullName, email, toggleSettings}) => {
	return (
		<div className="SettingsContainer">
			<div className="SettingsPanel">
				<div className="FloatRightContainer">
					<img className="ExitSettingsImg"
						onClick={toggleSettings}
						src={urls.images+"baseline-close-24px.svg"}
					/>
				</div>
				<h2>Settings</h2>
				<div className="SimpleSettings">
					<div className="SettingsRow">
						<div className="SettingsKey">
							Name
						</div>
						<input className="SettingsValue">
						</input>
					</div>
					<div className="SettingsRow">
						<div className="SettingsKey">
							Email Address
						</div>
						<input className="SettingsValue">
						</input>
					</div>
				</div>
				<div className="NewPasswordContainer">
					<div className="SettingsRow">
						<div className="SettingsKey">
							Old Password
						</div>
						<input className="SettingsValue">
						</input>
					</div>
					<div className="SettingsRow">
						<div className="SettingsKey">
							New Password
						</div>
						<input className="SettingsValue">
						</input>
					</div>
					<div className="SettingsRow">
						<div className="SettingsKey">
							Repeat New Password
						</div>
						<input className="SettingsValue">
						</input>
					</div>

				</div>
			</div>
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		nickName: state.user.nickName,
		fullName: state.user.fullName,
		email: state.user.email
	};
};


export default connect(mapStateToProps, { toggleSettings})(SettingsPanel);

