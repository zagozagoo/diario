function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

//caixa descricao dinamica
const descricaoTextarea = document.getElementById('descricao');
// adiciona um ouvinte de evento de entrada para a caixa de texto
descricaoTextarea.addEventListener('input', function () {
    // ajusta a altura da caixa de texto com base no conteúdo inserido pelo usuário
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

