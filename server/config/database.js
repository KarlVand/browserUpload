// config/database.js
const path = require('path');

module.exports = {
    development: {
        dialect: 'sqlite',
        storage: path.join(__dirname, '..', 'database.sqlite'),
        logging: false
    },
    test: {
        dialect: 'sqlite',
        storage: ':memory:',
        logging: false
    },
    production: {
        dialect: 'sqlite',
        storage: path.join(__dirname, '..', 'database.sqlite'),
        logging: false
    }
};

// Then in your model file:
/* const dbConfig = require('../config/database');
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(dbConfig[env]); */