// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const disciplina = require('./src/controllers/disciplina');
const curso = require('./src/controllers/curso');
const turma = require('./src/controllers/turma');
const professor = require('./src/controllers/professor');
const login = require('./src/controllers/login');
const turmaSelecionada = require('./src/controllers/pagina_turma');
const diario = require('./src/controllers/criar_diario');
const visualizacao= require('./src/controllers/visualizacao_diario');
const TM_diarios = require('./src/controllers/TM_diarios');
const TM_visualizacao = require('./src/controllers/TM_visualizacao_diario');
const recuperar_senha = require('./src/controllers/recuperar_senha');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.get('/cadastro_curso', curso.pagCursoGet);
route.post('/cadastro_curso', curso.cursoInsert);

route.get('/cadastro_turma', turma.ListaCurso);
route.post('/cadastro_turma', turma.turmaInsert);

route.get('/criar_diario', diario.Listas);
route.post('/criar_diario', diario.DiarioInsert);

route.get('/cadastro_disciplina', disciplina.pagDisciplinaGet);
route.post('/cadastro_disciplina', disciplina.disciplinaInsert);

route.get('/cadastro_professor', professor.pagProfessorGet);
route.post('/cadastro_professor', professor.professorInsert);

route.get('/pagina-da-turma', turmaSelecionada.listaDisciplinas);


route.get('/visualizacao_diario', visualizacao.pagVisualizacaoGet);
route.post('/visualizacao_diario', visualizacao.deletarPost);


//ROTAS PARA TM(TURMAS) 
route.get('/diario_turmas', TM_diarios.listaDisciplinas);

route.get('/visualizacao_turma_diario', TM_visualizacao.pagVisualizacaoGet);

//senhas e recuperação de senhas
route.get('/login', login.pagLoginGet);
route.post('/login', login.verificarLoginPost);

route.get('/recuperar_senha', recuperar_senha.pagRecadastrarSenhaGet);
route.post('/recuperar_senha', recuperar_senha.pagRecadastrarSenhaPost);

module.exports = route;
