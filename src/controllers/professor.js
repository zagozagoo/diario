const professor = require('../model/professor');

module.exports = {
    async pagProfessorGet(req, res) {
        res.render('../views/professor');
    },
    async professorInsert(req, res) {
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando professor no banco de dados

        if (dados.professor.length <= 3) {
            var error = "O nome do professor deve ter mais de 3 dígitos.";
            return res.render("../views/professor", { error });
        }

        await professor.create({
            Nome: dados.professor,
            Instituicao: dados.instituicao 
        });
        // Redirecionar para a página principal
        res.redirect('/');
    }
}