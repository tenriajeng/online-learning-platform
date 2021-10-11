const knex = require("knex");
const knexFile = require("../knexfile");

const db = require("knex")(knexFile);

module.exports = db;
