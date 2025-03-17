function botaoenviar() {
    // Função para validar os campos
    function validarCampos() {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var assunto = document.getElementById('assunto').value;
        var mensagem = document.getElementById('mensagem').value;

        // Verificando se algum campo está vazio
        if (nome === "" || assunto === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return false;  // Retorna falso, para impedir o envio
        } else {
            return true;  // Se todos os campos estiverem preenchidos, retorna verdadeiro
        }
    }

    // Verifica se a validação foi bem-sucedida
    if (validarCampos()) {
        // Se todos os campos estão ok, ele manda a mensagem abaixo
        alert("Dados enviados com sucesso!");

        // Limpa os campos
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('assunto').value = '';
        document.getElementById('mensagem').value = '';
    } else {
        console.log('Campos não preenchidos corretamente'); // Para depuração
    }
}