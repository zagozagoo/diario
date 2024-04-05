var senha1 = document.getElementById("senha1");
var senha1 = document.getElementById("senha2");
var resposta = document.getElementById("resposta");
var botao = document.getElementById("botao");


function veirificaSenha(){
    if (senha1 != senha2){
        resposta.type = "text";
        resposta.value = "oi";
        botao.disabled = true;
    }else{
        botao.disabled = false;
    }
}
