// const curso = require("../model/curso");
// const disciplina = require("../model/disciplina");
// const curso = require("../model/curso");
// const curso = require("../model/curso");

// module.exports = {
//     async pagInicialGet(req, res) {
//         res.render('../views/index');
//     }
// }

const curso = require('../model/curso');
const turma = require('../model/turma');




module.exports = { // exporta o que ta dentro

    async pagInicialGet(req, res) {
        const cursos = await curso.findAll({
            raw: true,
            attributes: ['IDCurso', 'Nome']
        });

        res.render('../views/index', {cursos, turma: '', id: ''});
    
        // const alunos = await aluno.findAll({
        //     raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
        //     attributes: ['IDAluno', 'Nome', 'Idade']
        // });
        // res.render('../views/index', { salas, alunos });

    },
    async pagInicialPost(req, res){
        const id = req.body.nome;
        const turmas = await turma.findAll({
        raw: true,
        attributes: ['IDTurma', 'Nome'],
        where: { IDCurso: id }
    });
    const cursos = await curso.findAll({ raw: true, attributes: ['IDCurso', 'Nome'] });
    res.render('../views/index', {cursos, turmas, id});
    }
}