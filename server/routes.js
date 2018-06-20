/*
 routes.js
 ---

 ---------
 Use a custom router for lightweight, see router.js
 Go through Routes with a simple err callback if none found
 Will stop after route hit
 */

var { createRouter } = require("./router");
var { myRequests, queryRequest } = require("./requestControllers/queryController");
var { createRequest } = require("./requestControllers/createController");
var { queryUser } = require("./userControllers/queryUser");
var { createUser } = require("./userControllers/createUser");
var { updateUser } = require("./userControllers/updateUser");
var { approveRequest, rejectRequest } = require("./requestControllers/updateController");
var { submitComment } = require("./requestControllers/commentController");

module.exports = (event, callback) => {
	console.log("Router called to ", event.path);
	let router = createRouter(event, callback);

	router.use("/myrequests", myRequests);
	router.use("/requests/query", queryRequest);
	router.use("/requests/submit", submitComment);
	router.use("/requests/approve", approveRequest);
	router.use("/requests/reject", rejectRequest);
	router.use("/requests/create", createRequest);
	router.admin("/users/query", queryUser);
	router.admin("/users/create", createUser);
	router.admin("/users/update", updateUser);

	router.use("/", function(event, callback) {
		console.log("Route not found");
		callback({
			"statusCode": 404,
			"body": JSON.stringify({
				message: "Route Not Found"
			})
		});
	});
};
