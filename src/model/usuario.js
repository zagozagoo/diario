const Sequelize = require('sequelize');
const database = require('../config/db');

const usuario = database.define ('Usuario',
{
    IDUsuario:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Usuario:
    {
        type: Sequelize.STRING(100),
        allowNull: false 
    },
    Senha: 
    {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    Permissao:
    {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = usuario;