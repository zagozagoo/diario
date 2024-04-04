const sequelize = require('sequelize');

//configurações da base de dados   db       usuario   senha
const database = new sequelize('Db_Diario', 'diario', 'ets@bosch123',
{
    dialect: 'mssql', host: 'localhost', port: 1433
    
    // duda: 62232
    // zago: 1433
});

database.sync();

module.exports = database;