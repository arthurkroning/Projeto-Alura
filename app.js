// Função para criptografar o texto
function criptografarTexto(texto) {
    return texto.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    return texto.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
}

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('texto');
    const h1Texto1 = document.querySelector('.texto1');
    const h4Texto2 = document.querySelector('.texto2');
    const imagemFoto2 = document.getElementById('foto2');
    const botaoCriptografar = document.querySelector('.cript');
    const botaoDescriptografar = document.querySelector('.decript');
    const botaoCopiar = document.querySelector('.copiar');

    // Adicionando evento de clique ao botão de criptografar
    botaoCriptografar.addEventListener('click', function () {
        const textoOriginal = textarea.value;
        const textoCriptografado = criptografarTexto(textoOriginal);
        h4Texto2.textContent = textoCriptografado;

        imagemFoto2.style.display = 'none';
        h1Texto1.style.display = 'none';
        h4Texto2.style.display = 'block';
        botaoCopiar.style.display = 'block'; // Exibe o botão de copiar
    });

    // Adicionando evento de clique ao botão de descriptografar
    botaoDescriptografar.addEventListener('click', function () {
        const textoCriptografado = h4Texto2.textContent;
        const textoDescriptografado = descriptografarTexto(textoCriptografado);
        h4Texto2.textContent = textoDescriptografado;

        imagemFoto2.style.display = 'none'; 
        h1Texto1.style.display = 'none';
        h4Texto2.style.display = 'block';
        botaoCopiar.style.display = 'block'; 
    });

    // Adicionando evento de clique ao botão de copiar
    botaoCopiar.addEventListener('click', function () {
        const textoCriptografado = h4Texto2.textContent;
        navigator.clipboard.writeText(textoCriptografado).then(function() {
            alert('Mensagem criptografada copiada para a área de transferência!');
        }, function() {
            alert('Erro ao copiar a mensagem criptografada.');
        });
    });
});

function validateInput(textarea) {
    var regex = /^[a-z\s]*$/; // Expressão regular que permite apenas letras minúsculas e espaços
    
    var text = textarea.value.toLowerCase(); // Convertendo o texto para minúsculas
    var newText = '';
    
    // Substituindo acentos por espaços
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, " ");
    
    // Verificando cada caractere do texto
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if (regex.test(char)) { // Se o caractere corresponder à expressão regular
            newText += char;
        } else if (char === ' ') { // Se o caractere for um espaço, adiciona ao novo texto
            newText += char;
        }
    }
    
    // Atualizando o conteúdo do textarea
    textarea.value = newText;
}

