const curso = require('../model/curso');
const turma = require('../model/turma');

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