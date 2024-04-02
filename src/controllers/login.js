//const /*tabela no model*/ = require('../model/'/*dentro das aspas coloca a mesma tabela*/);

module.exports = {
    async pagLoginGet(req, res) {
        res.render('../views/login');
    }
    // ,
    // async verificarLogin(req, res) {
    //     const login = req.body.loginn;
    //     const senha = req.body.senhaa;

    //     const pessoaIdentificada = await pessoa.findOne ({
    //         raw: true,
    //         attributes: ['IDPessoa','Nome', 'EDV', 'Senha','Permissao'],
    //         where: {EDV: login, Senha: senha}
    //     });

    //     if (pessoaIdentificada) {
    //         res.redirect();
    //     }
    //     else {
    //         resultado = false;
    //         res.render('../views/login', {resultado});
    //     }
    //}
}