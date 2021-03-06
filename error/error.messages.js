module.exports = {
    WRONG_EMAIL_OR_PASSWORD:{
        status:400,
        message: 'Wrong email or password'
    },
    TOO_SMALL_PASSWORD: {
        status: 401,
        customCode: 4011
    },

    SOME_FIELD_IS_EMPTY: {
        status: 401,
        customCode: 4012
    },

    USER_NOT_FOUND: {
        status: 404,
        customCode: 4041,
        message: 'user not found'
    },

    NOT_VALID_ID: {
        status: 400,
        customCode: 4001
    },

    USER_ALREADY_EXISTED: {
        status: 401,
        customCode: 4013
    },

    USER_IS_CREATED: {
        status: 201,
        customCode: 2011
    },

    USER_WAS_DELETED: {
        status: 201,
        customCode: 4012
    },

    TOKEN_REQUIRED: {
        status: 401,
        message: 'Token required'
    },

    NOT_VALID_TOKEN: {
        status: 401,
        customCode: 4015,
        message: 'Not valid token'
    },

    EMAIL_EXIST: {
        status: 401,
        customCode: 4016
    },

    USER_NOT_ENTER_YET: {
        status: 401,
        customCode: 4017,
        message: 'User not enter yet or user not found'
    },

    WRONG_EMAIL_TEMPLATE: {
        status: 401,
        customCode: 4018
    },

    NOT_VALID_FILE: {
        status: 401,
        customCode: 4019
    },
    TOO_MATCH_PHOTOS: {
        status: 401,
        customCode: 4020
    },
    ACCESS_DENIED: {
        status: 403,
        customCode: 4001
    },
};
