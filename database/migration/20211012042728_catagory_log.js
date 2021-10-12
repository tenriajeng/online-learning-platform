exports.up = function (knex) {
	return knex.schema.createTable("category_log", (table) => {
		table.increments();
		table.string("category_id");
		table.string("user_id");
		table.timestamp("created_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("category_log");
};
