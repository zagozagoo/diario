const disciplina = require('../model/disciplina');
const diario = require('../model/diario');
const professor = require('../model/professor');
const turma = require('../model/turma'); //mudar para pegar automatico depois

module.exports = {
    
    async Listas(req, res) { 
        id = req.query.id;
        // console.log(id)
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
        res.render('../views/criar_diario', { disciplinas, professores, turmas, id }); 
    },
    async DiarioInsert(req, res) {
        const dados = req.body;
        // console.log("aa", id)

        const dataFormatada = new Date(dados.data).toISOString();

  
        await diario.create({
            Descricao: dados.descricao,
            Data: dataFormatada,
            IDProfessor: dados.professor,
            IDTurma: id,
            IDDisciplina: dados.disciplina
        });
        res.redirect('/diario_turmas/?id='+id);
    }
}