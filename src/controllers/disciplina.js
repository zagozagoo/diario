const disciplina = require('../model/disciplina');

module.exports = {
    async pagDisciplinaGet(req, res) {
        res.render('../views/disciplina');
    },
    async disciplinaInsert(req, res) {
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