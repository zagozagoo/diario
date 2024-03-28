// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const disciplina = require('./src/controllers/disciplina');
const curso = require('./src/controllers/curso');
const turma = require('./src/controllers/turma');
const professor = require('./src/controllers/professor');

// Iniciando as rotas
route.get('/', home.pagInicialGet);

route.get('/cadastro_curso', curso.pagCursoGet);
route.post('/cadastro_curso', curso.cursoInsert);

route.get('/cadastro_turma', turma.pagTurmaGet );

route.get('/cadastro_disciplina', disciplina.pagDisciplinaGet);
route.post('/cadastro_disciplina', disciplina.disciplinaInsert);

route.get('/cadastro_professor', professor.pagProfessorGet);
route.post('/cadastro_professor', professor.professorInsert);

module.exports = route;