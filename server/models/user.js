const sequelize  = require ('../index');
const { DataTypes } = require ("sequelize");

const userBuild = sequelize.define (
    'User', 
    {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

const User = sequelize.module("User", userBuild);


module.exports = User;