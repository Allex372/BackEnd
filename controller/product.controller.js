const fs = require('fs-extra').promises;
const {productService} = require('../service');
const {errorCodes, emailActions} = require('../constant');
const {filePathBuider} = require('../helper');
const {errorMessages} = require('../error');
const uuid = require('uuid').v1();

module.exports = {
    getAllProducts: async (req, res, next) => {
        try {
            const products = await productService.findAllProducts();

            res.json(products);
        } catch (e) {
            next(e);
        }
    },

    // getSingleUser: async (req, res) => {
    //     try {
    //         const userId = req.params.id;
    //
    //         const user = await userService.findUserById(userId);
    //
    //         res.json(user);
    //     } catch (e) {
    //         res.json(e.message);
    //     }
    // },

    createProduct: async (req, res, next) => {
        try {
            const {
                body: {name, description, price}, photos
            } = req;

            const photosUrl = []


            for (const photo of photos) {
                if (photo) {
                    const {
                        finalFilePath,
                        uploadPath,
                        fileDir
                    } = filePathBuider.fileBuilderPath(photo.name, 'photos');

                    await fs.mkdir(fileDir, {recursive: true});

                    await photo.mv(finalFilePath);
                    photosUrl.push(uploadPath)

                    // await productService.updateProduct(createdProduct._id, {photo: uploadPath});
                }
            }
            req.body = {...req.body, photos: photosUrl}

            const createdProduct = await productService.createProduct(req.body);

            // await emailService.sendMail(email, emailActions.WELCOME, {userName: name});

            res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    },

    deleteSingleUser: async (req, res) => {
        try {
            const userId = req.params.id;
            //
            // const user = await userService.findUserById(userId);
            //
            // const { email, name } = user;

            // await userService.deleteSingleUser(userId);
            //
            // await emailService.sendMail(email, emailActions.USER_DELETED, { userName: name });

            res.json(`${name} was deleted`);
        } catch (e) {
            res.json(e.message);
        }
    }
};
