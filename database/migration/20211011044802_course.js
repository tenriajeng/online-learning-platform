exports.up = function (knex) {
	return knex.schema.createTable("course", (table) => {
		table.increments();
		table.string("title");
		table.string("slug").unique();
		table.string("image");
		table.text("description");
		table.integer("price");
		table.integer("status");
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.datetime("updated_at").nullable();
		table.datetime("deleted_at").nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("course");
};
