const turma = require('../model/turma');
const materia = require('../model/disciplina');

module.exports = {
    async pagTurmaSelecionadaGet(req, res) {
        req.query.id;
        res.render('../views/pagina_turma');
    }
}
