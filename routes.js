// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');


const turma = require('./src/controllers/turma');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/cadastro_turma', turma.pagTurmaGet );

module.exports = route;