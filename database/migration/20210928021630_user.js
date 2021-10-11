exports.up = function (knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments("id").primary();
		table.string("username", 50).nullable();
		table.string("email", 50).notNullable().unique();
		table.string("password").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.datetime("updated_at").nullable();
		table.datetime("deleted_at").nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
