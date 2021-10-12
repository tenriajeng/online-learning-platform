const joi = require("joi");

const validation = joi.object({
	title: joi.string().min(10).required(),
	description: joi.string().required(),
	price: joi.number().required(),
	status: joi.number().required(),
});

const courseValidation = (req, res, next) => {
	try {
		const validationResult = validation.validate({
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			status: req.body.status,
		});

		console.log(validationResult.error);

		if (validationResult.error) {
			return res
				.status(400)
				.json({
					message: validationResult.error.message,
				})
				.end();
		}
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

module.exports = courseValidation;
