const Products = require('../dataBase/models/Products');

module.exports = {
    findAllProducts: () => Products.find(),

    // findUserById: (userId) => (User.findById(userId)),
    //
    createProduct: (data) => Products.create(data),

    updateProduct: (id, photos) => {
        console.log(photos)
        Products.updateOne({_id: id}, photos)
    }
};
