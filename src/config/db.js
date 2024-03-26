const sequelize = require('sequelize');

//configurações da base de dados   db       usuario   senha
const database = new sequelize('Db_Diario', 'diario', 'ets@bosch207',
{
    dialect: 'mssql', host: 'localhost', port: 1433
});

database.sync();

module.exports = database;