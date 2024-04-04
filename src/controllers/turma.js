const curso = require('../model/curso');
const turma = require('../model/turma');
const usuario = require('../model/usuario');

module.exports = {
    async pagTurmaGet(req, res) {
        res.render('../views/turma');
    },
    async ListaCurso(req, res) { // chamar no rota
        // Encontrando todas as salas disponíveis no SQL
        const cursos = await curso.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDCurso', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../views/turma', { cursos }); // nome do arquivo SALAS É um parametro
    },
    async turmaInsert(req, res) {
        const dados = req.body;

        const cursos = await curso.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDCurso', 'Nome']
        });

        // Validar as entradas
        if (dados.senha.length <= 6) {
            var error = "A senha deve ter mais de 6 dígitos."
            return res.render("../views/turma", { error, cursos });
        }

        if (dados.turma.length <= 3) {
            var error = "O nome da turma deve ter mais de 3 dígitos.";
            return res.render("../views/turma", { error, cursos });
        }

        // Criar o usuário primeiro
        const novoUsuario = await usuario.create({
            Usuario: dados.usuario,
            Senha: dados.senha,
            Permissao: false
        });

        // Obter o idUsuario recém-criado
        const idUsuario = novoUsuario.IDUsuario;

        // Criar a turma e associá-la ao usuário
        await turma.create({
            Nome: dados.turma,
            IDCurso: dados.cursos,
            IDUsuario: idUsuario // Associar a turma ao usuário recém-criado
        });

        res.redirect('/');
    }
}

function validar() {
    let nome = document.getElementById("nome").value;
    let p = document.getElementById("teste");
    if (nome == "" || nome == null) {
        p.innerText = "O campo nome não pode ser vazio!";
        p.style.color = "red";
    } else if (nome.length < 3) {
        p.innerText = "Insira um nome válido!";
        p.style.color = "orange";
    } else {
        p.innerText = "Enviado com sucesso!";
        p.style.color = "green";
    }
}