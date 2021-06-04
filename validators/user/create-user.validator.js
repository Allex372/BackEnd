const Joi = require('joi');

const { regex, constants } = require('../../constant');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(3).max(50),
    email: Joi.string().required(),
    role: Joi.string(),
    password: Joi.string().required(),
    age: Joi.number().positive().min(16).max(19),
});
