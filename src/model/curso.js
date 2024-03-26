const Sequelize = require('sequelize');
const database = require('../config/db');

const curso = database.define('Curso', {
    IDCurso: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
});

module.exports = curso;
