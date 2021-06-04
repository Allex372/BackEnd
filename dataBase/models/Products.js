const { Schema, model } = require('mongoose');
const { constants } = require('../../constant');


const productScheme = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    photos: { type: Array },
});


module.exports = model(constants.Products, productScheme);
