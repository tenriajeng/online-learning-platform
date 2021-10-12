const { createCourse, checkSlug, updateCourse, getNumberOfCourse, getAllCourse, destroyCourse } = require("../../models/courseModel");
const Response = require("../../response/response");
const slug = require("slug");
const { paginate } = require("../../helper/pagination");

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

courseCreate = async (req, res) => {
	try {
		let data = req.body;
		data.slug = slug(req.body.title);
		let slugData = await checkSlug(data.slug);
		data.slug = `${data.slug}-${slugData.length}`;
		data = await createCourse(data);

		return Response.success(res, data);
	} catch (error) {
		return res.status(400).json({ err: error });
	}
};

courseUpdate = async (req, res) => {
	try {
		let data = req.body;
		data.slug = slug(req.body.title);
		let slugData = await checkSlug(data.slug);
		data.slug = `${data.slug}-${slugData.length}`;
		data.updated_at = new Date();
		await updateCourse(req.params.courseId, data);

		return Response.success(res, data);
	} catch (error) {
		return res.status(400).json({ err: error });
	}
};

courseDestroy = async (req, res) => {
	try {
		course = await destroyCourse(req.params.courseId);

		return Response.success(res, "Course deleted successfully");
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = { courseCreate, courseUpdate, courseList, courseDestroy };
