const curso = require('../model/curso');

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
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando disciplina no banco de dados
        await disciplina.create({
            Nome: dados.disciplina,
            Instituicao: dados.instituicao 
        });
        // Redirecionar para a página principal
        res.redirect('/');
    }
}