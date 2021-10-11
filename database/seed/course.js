const faker = require("faker");

exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("course").del();

	for (let index = 0; index <= 200; index++) {
		await knex("course").insert(createCourseFaker());
	}
};

const createCourseFaker = () => ({
	title: faker.lorem.word(),
	slug: faker.lorem.slug(),
	description: faker.lorem.text(),
	price: faker.datatype.number(),
	status: 1,
	image: faker.image.technics(),
});
