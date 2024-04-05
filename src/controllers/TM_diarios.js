const professor = require('../model/professor');
const disciplina = require('../model/disciplina');
const diario = require('../model/diario');
const turma = require('../model/turma');
const usuario = require('../model/usuario');

module.exports = {
    async listaDisciplinas(req, res) {
        const id = req.query.id; //USER

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

        // testeeeee da para apagar depois
        const turmaa = await turma.findOne({
            raw: true,
            attributes: ['IDTurma'],
            where: { IDTurma: id }
        })

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
            attributes: ['IDTurma', 'Nome', 'IDUsuario']
        });

        const usuarios = await usuario.findAll ({
            raw:true,
            attributes: ['IDUsuario']
        });

        res.render('../views/TM_diarios', { usuarios, disciplinas, diarios, professores, id, turmas, turmaa});
    },
}