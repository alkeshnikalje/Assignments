const Sequelize = require('sequelize');

const sequelize = new Sequelize("appointment","alkesh","alkesh",{
    host : "192.168.1.36",
    dialect: 'mysql'
});

module.exports = sequelize;