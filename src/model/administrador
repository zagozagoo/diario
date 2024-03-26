const Sequelize = require('sequelize');
const database = require('../config/db');
const usuario = require('./usuario'); 

const administrador = database.define ('Administrador',
{
    IDAdministrador:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome:
    {
        type: Sequelize.STRING(255),
        allowNull: false 
    },
    EDV: 
    {
        type: Sequelize.STRING(8),
        allowNull: false
    }
});

administrador.belongsTo (usuario,
    {
        constraint: true, 
        foreignKey: 'IDUsuario'
    }
)

module.exports = administrador;