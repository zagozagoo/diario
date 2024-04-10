const curso = require('../model/curso');

module.exports = {
    async pagCursoGet(req, res) {
        const cursos = await curso.findAll({
            raw: true,
            attributes: ['IDCurso', 'Nome']
        });
        res.render('../views/curso',{cursos});
    },
    
    async cursoInsert(req, res) {
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando curso no banco de dados

        if (dados.curso.length <= 3) {
            var error = "O nome do curso deve ter mais de 3 dígitos.";
            return res.render("../views/curso", { error });
        }

        await curso.create({
            Nome: dados.curso
        });
        // Redirecionar para a página principal
        res.redirect('/');
    }
}

// EXEMPLO DO LUIZ
// module.exports = {
//     async pagProfessorGet(req, res) {
//         // input no front tem name = 'nome_professor'
//         prof = req.body.nome_professor

//         const info_professor = await professores.findOne({
//             raw: true,
//             where: {'Nome': prof}
//         });

//         res.render('../views/professor', { info_professor });
//     }
// }

