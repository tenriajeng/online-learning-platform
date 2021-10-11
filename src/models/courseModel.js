const connection = require("../../config/database");

async function findOneCourse(slug) {
	return connection
		.select("id", "title", "slug", "description", "price", "status", "created_at", "updated_at")
		.from("course")
		.where({
			slug: slug,
			status: 1,
			deleted_at: null,
		})
		.first();
}

async function getAllCourse(limit, startIndex, sort = "created_at", ordinal = "DESC", search = null) {
	let query = connection.select("id", "title", "slug", "description", "price", "status", "created_at", "updated_at").from("course").where({
		status: 1,
		deleted_at: null,
	});

	if (search != null) {
		query = query.where("title", "like", `%${search}%`);
	}

	query.orderBy(sort, ordinal).limit(limit).offset(startIndex);

	return query;
}

async function getNumberOfCourse() {
	return connection("course").count("id as count").first();
}

module.exports = { findOneCourse, getAllCourse, getNumberOfCourse };
