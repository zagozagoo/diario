const curso = require('../model/curso');

module.exports = {
    async pagCursoGet(req, res) {
        res.render('../views/curso');
    },
    async cursoInsert(req, res) {
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando curso no banco de dados

        // if (dados.curso.length <= 3) {
        //     var error = "O nome do curso deve ter mais de 3 dígitos.";
        //     return res.render("../views/turma", { error, cursos });
        // }

        await curso.create({
            Nome: dados.curso
        });
        // Redirecionar para a página principal
        res.redirect('/');
    }
}

// function validar() {
//     let nome = document.getElementById("nome").value;
//     let p = document.getElementById("teste");
//     if (nome == "" || nome == null) {
//         p.innerText = "O campo nome não pode ser vazio!";
//         p.style.color = "red";
//     } else if (nome.length < 3) {
//         p.innerText = "Insira um nome válido!";
//         p.style.color = "orange";
//     } else {
//         p.innerText = "Enviado com sucesso!";
//         p.style.color = "green";
//     }
// }

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

