const curso = require('../model/curso');
const turma = require('../model/turma');
const usuario = require('../model/usuario');

module.exports = {
    async pagTurmaGet(req, res) {
        res.render('../views/turma');
    },
    async ListaCurso(req, res) { // chamar no rota
        // Encontrando todas as salas disponíveis no SQL
        const cursos = await curso.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDCurso', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../views/turma', { cursos }); // nome do arquivo SALAS É um parametro
    },
    async turmaInsert(req, res) {
        const dados = req.body;
        // Criar o usuário primeiro
        const novoUsuario = await usuario.create({
            Usuario: dados.usuario,
            Senha: dados.senha
        });
        // Obter o idUsuario recém-criado
        const idUsuario = novoUsuario.IDUsuario;
        // Criar a turma e associá-la ao usuário
        await turma.create({
            Nome: dados.turma,
            IDCurso: dados.cursos,
            IDUsuario: idUsuario // Associar a turma ao usuário recém-criado
        });
        res.redirect('/');
    }
}