function toggleDarkMode() {
    // Pega a referencia do elemento body do html
    const body = document.body;

    // Verifica se o modo escuro já está ativado
    const darkModeEnabled = body.classList.contains('dark-mode');

   // Adiciona ou remove a classe dark-mode
   body.classList.toggle('dark-mode');

   // Armazena o estado do modo escuro no localStorage
   localStorage.setItem('darkModeEnabled', !darkModeEnabled);
}

// Aplica o modo escuro se estiver armazenado no localStorage após o DOM ser carregado
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Aplica o modo escuro se estiver armazenado no localStorage
    if (darkModeEnabled) {
        body.classList.add('dark-mode');
    }
});


//caixa descricao dinamica
const descricaoTextarea = document.getElementById('descricao');
// adiciona um ouvinte de evento de entrada para a caixa de texto
descricaoTextarea.addEventListener('input', function () {
    // ajusta a altura da caixa de texto com base no conteúdo inserido pelo usuário
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});