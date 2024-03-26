const Sequelize = require('sequelize');
const database = require('../config/db');

const professor = database.define('Professor', {
    IDProfessor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Instituicao: {
        type: Sequelize.STRING(5),
        allowNull: false
    }
});

module.exports = professor;