const jwt = require('jsonwebtoken');
const { errorMessages, ErrorHendler } = require('../error');
const { config: { JWT_ACCESS, JWT_REFRESH } } = require('../config');
const { constants: { AUTHORIZATION }, errorCodes } = require('../constant');
const { authService } = require('../service');

const { O_Auth } = require('../dataBase/models');

module.exports = {
    checkAccessTokenMiddleware: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');
            console.log(access_token)

            if (!access_token) {
                throw new ErrorHendler(errorCodes.UNAUTHORIZED, errorMessages.USER_NOT_ENTER_YET, errorMessages.USER_NOT_ENTER_YET.message);
            }

            jwt.verify(access_token, JWT_ACCESS, (err) => {
                if (err) {
                    throw new ErrorHendler(errorCodes.UNAUTHORIZED, errorMessages.TOKEN_REQUIRED, errorMessages.TOKEN_REQUIRED.message);
                }
            });

            const tokens = await O_Auth.findOne({ access_token }).populate('_user_id');

            if (!tokens) {
                throw new ErrorHendler(errorCodes.UNAUTHORIZED, errorMessages.TOKEN_REQUIRED, errorMessages.TOKEN_REQUIRED.message);
            }

            req.user = tokens._user_id;

            next();
        } catch (e) {
            next(e)
        }
    },

    checkRefreshTokenMiddleware: async (req, res, next) => {
        try {
            const refresh_token = req.get(AUTHORIZATION);

            if (!refresh_token) {
                throw new ErrorHendler(errorCodes.UNAUTHORIZED, errorMessages.USER_NOT_ENTER_YET, errorMessages.USER_NOT_ENTER_YET.message);
            }

            jwt.verify(refresh_token, JWT_REFRESH, (err) => {
                if (err) {
                    throw new ErrorHendler(errorCodes.UNAUTHORIZED, errorMessages.NOT_VALID_TOKEN, errorMessages.NOT_VALID_TOKEN.message);
                }
            });

            const tokens = await authService.findByParams({ refresh_token });

            if (!tokens) {
                throw new ErrorHendler(errorCodes.NOT_FOUND,errorMessages.USER_NOT_FOUND, errorMessages.USER_NOT_FOUND.message);
            }

            req.tokenInfo = tokens;
            next();
        } catch (e) {
            next(e);
        }
    }
};
