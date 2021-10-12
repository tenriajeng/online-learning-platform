const { getNumberOfCourse, getNumberOfFreeCourse } = require("../../models/courseModel");
const { getNumberOfUsers } = require("../../models/userModel");
const Response = require("../../response/response");

summaryList = async (req, res) => {
	try {
		let courseCount = await getNumberOfCourse();
		let freeCourseCount = await getNumberOfFreeCourse();
		let userCount = await getNumberOfUsers();
		let data = {
			user_total: userCount.count,
			course_total: courseCount.count,
			free_course_total: freeCourseCount.count,
		};

		return Response.success(res, data);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = { summaryList };
