const { DataTypes } = require('sequelize');

const defineUserModel = (sequelize) => {
    return sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};

module.exports = defineUserModel;