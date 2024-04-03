const usuarios = require('../model/usuario');

module.exports = {
    async pagRecadastrarSenhaGet(req, res) {
        res.render('../views/recuperar_senha');
    },
    async pagRecadastrarSenhaPost (req, res){
        const usuario = req.body.usuario;
        const senha1 = req.body.senha1;

        const pessoaIdentificada = await usuarios.update (
            {Senha: senha1},
            {where: {Usuario: usuario}}
        );

        res.redirect('/login');
    }
}