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

// module.exports = { // exporta o que ta dentro

//     async pagInicialGet(req, res) {
//         const cursos = await curso.findAll({
//             raw: true,
//             attributes: ['IDCurso', 'Nome']
//         });

//         res.render('../views/index', {cursos, turmas: '', id: ''});

//     },
//     async pagInicialPost(req, res){
//         const id = req.body.curso;
//         const turmas = await turma.findAll({
//         raw: true,
//         attributes: ['IDTurma', 'Nome'],
//         where: { IDCurso: id }
//     });
//     const cursos = await curso.findAll({ raw: true, attributes: ['IDCurso', 'Nome'] });
//     res.render('../views/index', {cursos, turmas, id});
//     }
// }
module.exports = {
    async pagInicialGet(req, res) {
        const cursos = await curso.findAll({
            raw: true,
            attributes: ['IDCurso', 'Nome']
        });

        // Quando nenhum curso for selecionado, exiba todas as turmas
        const turmas = await turma.findAll({
            raw: true,
            attributes: ['IDTurma', 'Nome']
        });

        res.render('../views/index', { cursos, turmas, id: '' });
    },
    async pagInicialPost(req, res) {
        const id = req.body.curso;

        let turmas;
        if (id) {
            // Se um curso for selecionado, exiba apenas as turmas desse curso
            turmas = await turma.findAll({
                raw: true,
                attributes: ['IDTurma', 'Nome'],
                where: { IDCurso: id }
            });
        } else {
            // Se nenhum curso for selecionado, exiba todas as turmas
            turmas = await turma.findAll({
                raw: true,
                attributes: ['IDTurma', 'Nome']
            });
        }

        const cursos = await curso.findAll({ raw: true, attributes: ['IDCurso', 'Nome'] });
        res.render('../views/index', { cursos, turmas, id });
    }
}