
const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeDigitado = nome.value.trim();

    if (nomeDigitado === "") {
        mensagem.textContent = "Por favor, digite seu nome!";
        mensagem.className = "mt-3 mb-0 text-danger";
    } else {
        mensagem.textContent = `Olá, ${nomeDigitado}! Seja bem-vindo!`;
        mensagem.className = "mt-3 mb-0 text-success";
    }
});
