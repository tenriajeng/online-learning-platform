const { paginate } = require("../../helper/pagination");
const { getNumberOfCategory, getAllCategory } = require("../../models/categoryModel");
const Response = require("../../response/response");

categoryList = async (req, res) => {
	try {
		let category = await getNumberOfCategory();

		const paging = await paginate(req.query.page, req.query.limit, category.count);

		category = await getAllCategory(paging.currentPage.limit, paging.currentPage.startIndex, req.query.sort, req.query.ordinal, req.query.search);

		return Response.success(res, category, paging);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = { categoryList };
