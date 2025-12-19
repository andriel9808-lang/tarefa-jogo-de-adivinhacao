let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let maxTentativas = 10;
let tentativasRestantes = maxTentativas

const inputPalpite = document.getElementById("palpite");
const botaoChutar = document.getElementById("btnChutar");
const botaoReiniciar = document.getElementById("btnReiniciar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

botaoChutar.addEventListener("click", function () {
    let palpite = parseInt(inputPalpite.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = `Parabéns! Você acertou o número secreto ${numeroSecreto}!`;
        botaoChutar.disabled = true;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior!";
    } else {
        mensagem.textContent = "O número secreto é menor!";
    }

    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        mensagem.textContent = `Fim de jogo! Você perdeu, o número secreto era ${numeroSecreto}.`;
        botaoChutar.disabled = true;
    }

    inputPalpite.value = "";
    inputPalpite.focus();
});

botaoReiniciar.addEventListener("click", function () {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = maxTentativas;

    mensagem.textContent = "";
    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    inputPalpite.value = "";
    inputPalpite.focus();

    botaoChutar.disabled = false;
});