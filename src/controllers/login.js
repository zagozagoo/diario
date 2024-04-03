const usuario = require('../model/usuario');

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

        console.log(pessoaIdentificada)

        if (pessoaIdentificada) {
            res.redirect('/');
            // redirecionando para a route home, que é '/'
        }
        else {
            resultado = false;
            res.render('../views/login');
        }
    }
}