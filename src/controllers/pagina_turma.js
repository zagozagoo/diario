const professor = require('../model/professor');
const disciplina = require('../model/disciplina');
const diario = require('../model/diario');
const turma = require('../model/turma');

module.exports = {
    async listaDisciplinas(req, res) {
        const id = req.query.id;

        let diarios;
      
        if (id) {
            diarios = await diario.findAll({
            raw: true,
            attributes: ['IDDiario', 'Data', 'IDProfessor', 'IDTurma',  'IDDisciplina'],
            where: { IDTurma: id }
            });

           
        } else {
            diarios = await diario.findAll({
                raw: true,
                attributes: ['IDDiario','Data', 'IDProfessor', 'IDTurma',  'IDDisciplina']
            });
        }

        const disciplinas = await disciplina.findAll({
            raw: true,
            attributes: ['IDDisciplina', 'Nome']
        });

        const professores = await professor.findAll({
            raw: true,
            attributes: ['IDProfessor', 'Nome']
        });

        const turmas = await turma.findAll({
            raw: true,
            attributes: ['IDTurma', 'Nome']
        });

        res.render('../views/pagina_turma', { disciplinas, diarios, professores, id, turmas });
    }
}