const Sequelize = require('sequelize');
const database = require('../config/db');
const curso = require('./curso');
const usuario = require('./usuario');

const turma = database.define('Turma', {
    IDTurma: {
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

turma.belongsTo(curso, {
    constraint: true,
    foreignKey: 'IDCurso',
    allowNull: false
});
turma.belongsTo(usuario, {
    constraint: true,
    foreignKey: 'IDUsuario',
    allowNull: false
});

module.exports = turma;