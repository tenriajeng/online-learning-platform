const { config, uploader } = require("cloudinary");
const dotenv = require("dotenv");

const cloudinaryConfig = (req, res, next) => {
	config({
		cloud_name: process.env.CLOUDINARY_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	});
	next();
};

module.exports = { cloudinaryConfig, uploader };
