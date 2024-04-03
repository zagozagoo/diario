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

        if (pessoaIdentificada) {
            if(pessoaIdentificada.Permissao == 0 || false){
                res.redirect('/diario_turmas/?id=' + pessoaIdentificada.IDUsuario);
            }
            else{
                res.redirect('/');
            }
            // Redirecionando para a rota home ('/') com o parâmetro IDUsuario na URL
        }
        else {
            resultado = false;
            res.render('../views/login');
        }
    }
}