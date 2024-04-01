const curso = require('../model/curso');

module.exports = {
    async pagCursoGet(req, res) {
        res.render('../views/curso');
    },
    async cursoInsert(req, res) {
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando curso no banco de dados
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

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
