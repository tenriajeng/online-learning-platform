const connection = require("../../config/database");

async function getTeachingMaterialsByCourse(courseId) {
	return connection.select("id", "course_id", "title", "slug", "content", "description", "status", "created_at", "updated_at").from("teaching_materials").where({
		course_id: courseId,
	});
}

module.exports = { getTeachingMaterialsByCourse };
