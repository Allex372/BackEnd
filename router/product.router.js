const router = require('express').Router();
const { productController } = require('../controller');
const { userMiddleware, authMiddleware: { checkAccessTokenMiddleware }, checkRoleMiddleware, fileMiddleware } = require('../middleware');

router.get('/',
    checkAccessTokenMiddleware,
    productController.getAllProducts);

router.post('/',
    checkAccessTokenMiddleware,
    fileMiddleware.checkFile,
    productController.createProduct)

// router.get('/:id', userController.getSingleUser);
//
// router.delete('/:id', userController.deleteSingleUser);
//
// router.post('/product')
//
// router.post('/',
//     // fileMiddleware.checkFile,
//     // fileMiddleware.checkAvatarLength,
//     // fileMiddleware.checkDocumentLength,
//     // fileMiddleware.checkVideoLength,
//     userMiddleware.isLoginExisted,
//     userMiddleware.isEmailCreated,
//     userMiddleware.isUserValid,
//     userController.createUser);

module.exports = router;
