// Função para criptografar o texto
function criptografarTexto(texto) {
    // Implemente aqui a lógica de criptografia desejada
    // Por exemplo, uma criptografia simples de substituição de caracteres
    // Esta é uma implementação de exemplo e não é segura para uso real
    return texto.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    // Implemente aqui a lógica de descriptografia correspondente à criptografia
    // Aqui, estamos usando uma descriptografia simples que reverte a criptografia acima
    return texto.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
}

document.addEventListener('DOMContentLoaded', function () {
    // Seletor do textarea
    const textarea = document.getElementById('texto');

    // Seletor do h1
    const h1Texto1 = document.querySelector('.texto1');

    // Seletor do h4
    const h4Texto2 = document.querySelector('.texto2');

    // Seletor da imagem com ID foto2
    const imagemFoto2 = document.getElementById('foto2');

    // Seletor do botão de criptografar
    const botaoCriptografar = document.querySelector('.cript');

    // Seletor do botão de descriptografar
    const botaoDescriptografar = document.querySelector('.decript');

    // Seletor do botão de copiar
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

        imagemFoto2.style.display = 'none'; // Oculta a imagem ao descriptografar
        h1Texto1.style.display = 'none';
        h4Texto2.style.display = 'block';
        botaoCopiar.style.display = 'block'; // Exibe o botão de copiar
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
