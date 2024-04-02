const disciplina = require('../model/disciplina');
const diario = require('../model/diario');
const turma = require('../model/turma');
const professor = require('../model/professor');

module.exports = {
    async pagVisualizacaoGet(req, res) {
        const id = req.query.id;

        let diarios;
      
        if (id) {
            diarios = await diario.findAll({
            raw: true,
            attributes: ['IDDiario', 'Data', 'IDProfessor', 'IDTurma',  'IDDisciplina', 'Descricao'],
            where: { IDDiario: id }
            });

           
        } else {
            diarios = await diario.findAll({
                raw: true,
                attributes: ['IDDiario','Data', 'IDProfessor', 'IDTurma',  'IDDisciplina', 'Descricao']
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

        res.render('../views/visualizacao_diario', { disciplinas, diarios, professores, id, turmas });
    }
}
