const usuario = require('../model/usuario');
const turma = require('../model/turma');

module.exports = {
    async pagLoginGet(req, res) {
        res.render('../views/login');
    },
    async verificarLoginPost(req, res) {
        const login = req.body.usuario;
        const senha = req.body.senha;

        const pessoaIdentificada = await usuario.findOne ({
            raw: true,
            attributes: ['IDUsuario','Usuario', 'Senha','Permissao'],
            where: {Usuario: login, Senha: senha}
        });

        if (pessoaIdentificada) {
            const turmaCerta = await turma.findOne ({
                raw: true,
                attributes: ['IDTurma'],
                where: {IDUsuario: pessoaIdentificada.IDUsuario}
            });

            global.id = turmaCerta.IDTurma

            if(pessoaIdentificada.Permissao == 0 || false){
                res.redirect('/diario_turmas/?id=' + turmaCerta.IDTurma);
            }
            else{
                res.redirect('/');
            }
        }
        else {
            resultado = false;
            res.render('../views/login');
        }
    }
}