module.exports = {
    async pagTurmaGet(req, res) {
        res.render('../views/turma');
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