exports.up = function (knex) {
	return knex.schema.createTable("teaching_materials", (table) => {
		table.increments();
		table.integer("course_id");
		table.string("title");
		table.string("slug");
		table.text("content");
		table.text("description");
		table.integer("status");
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.datetime("updated_at").nullable();
		table.datetime("deleted_at").nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("teaching_materials");
};
