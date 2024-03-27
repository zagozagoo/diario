// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const disciplina = require('./src/controllers/disciplina');
// // Iniciando as rotas
route.get('/', home.pagInicialGet);
// route.post('/', home.pagInicialPost);

route.get('/cadastro_disciplina', disciplina.pagDisciplinaGet);
// route.post('/sala', cadastro.disciplinaInsert);

module.exports = route;