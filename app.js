

const nomeInput = document.getElementById('amigo');
const adicionarBtn = document.getElementById('coletarBtn');
const listaHtml = document.getElementById('listaAmigos');
const sortearBtn = document.getElementById('sortearBtn');
const resultadoSorteioDiv = document.getElementById('sortearBtn');


const amigos = [];

adicionarBtn.addEventListener('click', () => {
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista na interface
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaHtml.appendChild(novoItem);

    // Limpa o input e foca nele para a próxima entrada
    nomeInput.value = '';
    nomeInput.focus();
});

// Adiciona a lógica para o botão "Sortear Amigo"
sortearBtn.addEventListener('click', () => {
    // 1. Validar se o array de amigos não está vazio
    if (amigos.length === 0) {
        alert('Não há amigos na lista para sortear. Por favor, adicione alguns nomes.');
        return;
    }

    // 2. Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar o resultado na tela
    resultadoSorteioDiv.textContent = amigoSorteado;
});

// Funcionalidade para adicionar nome ao pressionar Enter no input
nomeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarBtn.click();
    }
});




