const connection = require("../../config/database");

async function findOneCategory(id) {
	return connection
		.select("id", "title", "created_at", "updated_at")
		.from("category")
		.where({
			id: id,
		})
		.first();
}

async function getAllCategory(limit, startIndex, sort = "created_at", ordinal = "DESC", search = null) {
	let query = connection.select("id", "title", "created_at", "updated_at").from("category");

	if (search != null) {
		query = query.where("title", "like", `%${search}%`);
	}

	query.orderBy(sort, ordinal).limit(limit).offset(startIndex);

	return query;
}

async function getNumberOfCategory() {
	return connection("category").count("id as count").first();
}

async function createCategoryLog(categoryId, userId) {
	return connection("category_log").insert({ user_id: userId, category_id: categoryId });
}

module.exports = { findOneCategory, getAllCategory, getNumberOfCategory, createCategoryLog };
