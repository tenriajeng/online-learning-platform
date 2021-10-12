const { createCourse, checkSlug, updateCourse, getNumberOfCourse, getAllCourse, destroyCourse } = require("../../models/courseModel");
const Response = require("../../response/response");
const slug = require("slug");
const { paginate } = require("../../helper/pagination");
const { cloudinary } = require(".././../../config/cloudinary");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const upload = require("../../../config/multer");
const courseValidation = require("../../validation/admin/course.validation");

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
		upload.single("file")(req, res, async () => {
			courseValidation(req, res);

			if (req.file == undefined) {
				res.status(400).json({ message: "no file selected" });
			} else {
				try {
					const uploadResponse = await cloudinary.uploader.upload(req.file.path, { folder: "course" });
					let data = req.body;
					data.image = uploadResponse.secure_url;
					data.slug = slug(req.body.title);
					let slugData = await checkSlug(data.slug);
					data.slug = `${data.slug}-${slugData.length}`;
					data = await createCourse(data);

					return Response.success(res, data);
				} catch (error) {
					res.status(400).json({ err: error.message });
				}
			}
		});
	} catch (error) {
		return res.status(400).json({ err: error });
	}
};

courseUpdate = async (req, res) => {
	try {
		upload.single("file")(req, res, async () => {
			courseValidation(req, res);
			let data = req.body;
			let uploadResponse;

			if (req.file != undefined) {
				uploadResponse = await cloudinary.uploader.upload(req.file.path, { folder: "course" });
				data.image = uploadResponse.secure_url;
			}

			data.slug = slug(req.body.title);
			let slugData = await checkSlug(data.slug);
			data.slug = `${data.slug}-${slugData.length}`;
			data.updated_at = new Date();
			await updateCourse(req.params.courseId, data);

			return Response.success(res, data);
		});
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
