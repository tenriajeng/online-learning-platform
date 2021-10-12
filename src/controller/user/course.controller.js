const { paginate } = require("../../helper/pagination");
const { getNumberOfCourse, getAllCourse, findOneCourse } = require("../../models/courseModel");
const Response = require("../../response/response");

courseList = async (req, res) => {
	try {
		let course = await getNumberOfCourse();

		const paging = await paginate(req.query.page, req.query.limit, course.count);

		course = await getAllCourse(paging.currentPage.limit, paging.currentPage.startIndex, req.query.sort, req.query.ordinal, req.query.search);

		return Response.success(res, course, paging);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

courseDetail = async (req, res) => {
	try {
		data = await findOneCourse(req.params.slug);

		if (!data) {
			return res.status(404).json({ message: "data not found" });
		}
		return Response.success(res, data);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = { courseList, courseDetail };
