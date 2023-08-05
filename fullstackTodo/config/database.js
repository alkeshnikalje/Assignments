const Sequelize = require('sequelize');

const sequelize = new Sequelize("todo",process.env.USER,process.env.PASSWORD,{
    host : process.env.HOST,
    dialect: 'mysql'
});

module.exports = sequelize;

module.exports = sequelize;