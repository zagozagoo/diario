const curso = require('../model/curso');
const turma = require('../model/turma');

module.exports = {
    async pagInicialGet(req, res) {
        const cursos = await curso.findAll({
            raw: true,
            attributes: ['IDCurso', 'Nome']
        });
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
            turmas = await turma.findAll({
                raw: true,
                attributes: ['IDTurma', 'Nome'],
                where: { IDCurso: id }
            });
        } else {
            turmas = await turma.findAll({
                raw: true,
                attributes: ['IDTurma', 'Nome']
            });
        }

        const cursos = await curso.findAll({ raw: true, attributes: ['IDCurso', 'Nome'] });
        res.render('../views/index', { cursos, turmas, id });
    }
}