exports.up = function (knex) {
	return knex.schema.createTable("course_category", (table) => {
		table.increments();
		table.string("course_id");
		table.string("category_id");
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.datetime("updated_at").nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("course_category");
};
