const Sequelize = require('sequelize');
const database = require('../config/db');
const professor = require('./professor');
const turma = require('./turma');
const disciplina = require('./disciplina');

const diario = database.define('Diario', {
    IDDiario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    Data: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

diario.belongsTo(professor, {
    constraint: true,
    foreignKey: 'IDProfessor',
    allowNull: false
});

diario.belongsTo(turma, {
    constraint: true,
    foreignKey: 'IDTurma',
    allowNull: false
});

diario.belongsTo(disciplina, {
    constraint: true,
    foreignKey: 'IDDisciplina',
    allowNull: false
});

module.exports = diario;