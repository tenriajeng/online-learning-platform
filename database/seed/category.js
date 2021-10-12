const faker = require("faker");

exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("category").del();

	for (let index = 0; index <= 10; index++) {
		await knex("category").insert(createcategoryFaker(index));
	}
};

const createcategoryFaker = (index) => ({
	id: index + 1,
	title: faker.lorem.word(),
});
