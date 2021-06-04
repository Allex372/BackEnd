module.exports = {
    MONGO_URL: 'mongodb://localhost:27017/Sweet-Shop',
    PORT: 5000,
    JWT_ACCESS: process.env.JWT_ACCESS || 'JWT_ACCESS',
    JWT_REFRESH: process.env.JWT_REFRESH || 'JWT_REFRESH',
    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:4200;http://localhost:3000',


    ROOT_EMAIL: process.env.ROOT_EMAIL,
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD
};
