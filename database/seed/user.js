const faker = require("faker");

exports.seed = async function (knex) {
	await knex("users").del();

	await knex("users").insert([
		{
			id: 1,
			username: "admin",
			email: "ilham@gmail.com",
			password: "$2a$12$jqU0F.lXN2x2FZFTExLygO.ku4Pay8k3usPLTS7RF5XgTUE.h7MUC",
		},
		{
			id: 2,
			username: "user",
			email: "ilhamtenriajeng@gmail.com",
			password: "$2a$12$jqU0F.lXN2x2FZFTExLygO.ku4Pay8k3usPLTS7RF5XgTUE.h7MUC",
		},
	]);

	for (let index = 3; index <= 2003; index++) {
		await knex("users").insert(createUserFaker(index));
	}
};

const createUserFaker = (id) => ({
	id: id,
	username: faker.name.findName(),
	email: faker.internet.email(),
	password: "$2a$12$jqU0F.lXN2x2FZFTExLygO.ku4Pay8k3usPLTS7RF5XgTUE.h7MUC",
});
