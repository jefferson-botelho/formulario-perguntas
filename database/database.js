const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'nathaliab', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;

