const curso = require('../model/curso');

module.exports = {
    async pagCursoGet(req, res) {
        res.render('../views/curso');
    }, 
    async cursoInsert(req, res){
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando sala no banco de dados
        await curso.create({
        Nome: dados.disciplina
        });
        // Redirecionar para a página principal
        res.redirect('/');
        }
}