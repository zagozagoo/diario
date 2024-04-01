const professor = require('../model/professor');
const disciplina = require('../model/disciplina');
const diario = require('../model/diario');

module.exports = {
    async listaDisciplinas(req, res) {
        const disciplinas = await disciplina.findAll({
            raw: true,
            attributes: ['IDDisciplina', 'Nome']
        });

        const diarios = await diario.findAll({
            raw: true,
            attributes: ['IDDiario', 'Descricao', 'Data']
        });

        const professores = await professor.findAll({
            raw: true,
            attributes: ['IDProfessor', 'Nome']
        });

        res.render('../views/pagina_turma', { disciplinas, diarios, professores, id:'' });
    },


    async pagTurmasPost(req, res) {
        const id = req.body.id;

        let diario;
        if (id) {
            // Se um curso for selecionado, exiba apenas as turmas desse curso
            diarios = await diario.findAll({
                raw: true,
                attributes: ['IDDiario', 'Descricao', 'Data'],
                where: { IDTurma: id }
            });
        } else {
            // Se nenhum curso for selecionado, exiba todas as turmas
            diarios = await diario.findAll({
                raw: true,
                attributes: ['Diario', 'Descricao', 'Data']
            });
        }

        const disciplinas = await disciplina.findAll({ raw: true, attributes: ['IDDisciplina', 'Nome'] });
        res.render('../views/pagina_turma', { disciplinas, diarios, id });
    }
}