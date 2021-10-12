const faker = require("faker");

exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("course").del();

	for (let index = 0; index <= 10; index++) {
		await knex("course").insert(createCourseFaker(index));
	}
};

const createCourseFaker = (index) => ({
	category_id: index + 1,
	title: faker.lorem.word(),
	slug: faker.lorem.slug(),
	description: faker.lorem.text(),
	price: faker.datatype.number(),
	status: 1,
	image: faker.image.technics(),
});
