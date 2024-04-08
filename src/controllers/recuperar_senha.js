const usuarios = require('../model/usuario');

module.exports = {
    async pagRecadastrarSenhaGet(req, res) {
        res.render('../views/recuperar_senha');
    },

    async pagRecadastrarSenhaPost (req, res){
        const usuario = req.body.usuario;
        const senha1 = req.body.senha1;
        const senha2 = req.body.senha2;

        // Funçao para comparar se nome do usário ja esxiste o banco
        const comparar_usuario = await usuarios.findOne({
            raw: true,
            attributes: ['Usuario'],
            where: { Usuario: usuario }
            // comparando Usuario do banco com o usuario no campo de digitação que é o name do input no html
        });

        if (!comparar_usuario) {
            var error = "O nome de usuário não existe";
            return res.render("../views/recuperar_senha", { error });
        }

        if(senha1 != senha2) {
            var error = "As senhas não combinam, tente de novo";
            return res.render("../views/recuperar_senha", { error });
        }

        if (senha1.length <= 6) {
            var error = "A senha deve ter mais de 6 dígitos."
            return res.render("../views/recuperar_senha", { error });
        }

        // Atualiza a senha do usuário se ele existir
        await usuarios.update(
            { Senha: senha1 },
            { where: { Usuario: usuario } }
        );

        // Redireciona para a página de login após a conclusão
        res.redirect('/login');
    } 
};