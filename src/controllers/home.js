// const curso = require("../model/curso");
// const disciplina = require("../model/disciplina");
// const curso = require("../model/curso");
// const curso = require("../model/curso");

module.exports = {
    async pagInicialGet(req, res) {
        res.render('../views/index');
    }
}