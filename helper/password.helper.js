const bcrypt = require('bcrypt');
const {errorCodes} = require('../constant');
const {errorMessages} = require('../error');
const errorHendler = require('../error/ErrorHendler');

module.exports = {
    hash: (password) => bcrypt.hash(password, 11),
    compare: async (password, hashPassword) => {
        const isPasswordEquals = await bcrypt.compare(password, hashPassword);

        if (!isPasswordEquals) {
            throw new errorHendler(errorCodes.BAD_REQUEST, errorMessages.WRONG_EMAIL_OR_PASSWORD, errorMessages.WRONG_EMAIL_OR_PASSWORD.message);
        }
    }
};
