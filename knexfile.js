import { config } from "dotenv";
import { join } from "path";
config();

export const development = {
	client: process.env.DB_CLIENT,
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	},
	migrations: {
		directory: join(__dirname, process.env.MIGRATION_DIR),
	},
	seeds: {
		directory: join(__dirname, process.env.SEEDS_DIR),
	},
	pool: { min: 0, max: 10 },
};
