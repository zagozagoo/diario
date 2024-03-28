module.exports = {
    async pagCursoGet(req, res) {
        res.render('../views/curso');
    }
}

// EXEMPLO DO LUIZ
// module.exports = {
//     async pagProfessorGet(req, res) {
//         // input no front tem name = 'nome_professor'
//         prof = req.body.nome_professor

//         const info_professor = await professores.findOne({
//             raw: true,
//             where: {'Nome': prof}
//         });

//         res.render('../views/professor', { info_professor });
//     }
// }