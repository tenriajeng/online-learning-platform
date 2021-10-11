const connection = require("../../config/database");

async function findOneUser(email) {
	return connection
		.select("*")
		.from("users")
		.where({
			email: email,
		})
		.first();
}

async function getAllUser(limit, startIndex, sort = "created_at", ordinal = "DESC", search = null) {
	let query = connection.select("id", "username", "email", "created_at", "updated_at").from("users");

	if (search != null) {
		query = query.where("username", "like", `%${search}%`);
	}

	query.orderBy(sort, ordinal).limit(limit).offset(startIndex);

	return query;
}

async function getNumberOfUsers() {
	return connection("users").count("id as count").first();
}

async function createUser(data) {
	return connection
		.insert({
			email: data.email,
			password: data.password,
			created_at: new Date(),
		})
		.from("users")
		.then(function (id) {
			return connection.select("id", "username", "email", "created_at", "updated_at").from("users").where("id", id[0]);
		});
}

async function destroyUser(id) {
	return connection
		.from("users")
		.where({
			id: id,
		})
		.update({
			deleted_at: new Date(),
		});
}

module.exports = { findOneUser, createUser, getAllUser, getNumberOfUsers, destroyUser };
