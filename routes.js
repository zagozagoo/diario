// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const disciplina = require('./src/controllers/disciplina');
const turma = require('./src/controllers/turma');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/cadastro_turma', turma.pagTurmaGet );
route.get('/cadastro_disciplina', disciplina.pagDisciplinaGet);

module.exports = route;