const { Schema, model } = require('mongoose');
const { constants } = require('../../constant');


const userScheme = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
});


module.exports = model(constants.USER, userScheme);
