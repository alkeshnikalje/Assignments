const Sequelize = require('sequelize');

const sequelize = require('../config/database');


const People = sequelize.define("people",{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    phoneNumber : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

module.exports = People;