const { paginate } = require("../../helper/pagination");
const { getNumberOfUsers, getAllUser, destroyUser } = require("../../models/userModel");
const Response = require("../../response/response");

userList = async (req, res) => {
	try {
		let users = await getNumberOfUsers();

		const paging = await paginate(req.query.page, req.query.limit, users.count);

		users = await getAllUser(paging.currentPage.limit, paging.currentPage.startIndex, req.query.sort, req.query.ordinal, req.query.search);

		return Response.success(res, users, paging);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

userDestroy = async (req, res) => {
	try {
		users = await destroyUser(req.params.userId);

		return Response.success(res, "User deleted successfully");
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = { userList, userDestroy };
