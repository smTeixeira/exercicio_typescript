"use strict";
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
function saudacao(nome) {
    return "Olá " + nome;
}
const resultadoMultiplicacao = multiplicacao(2, 3);
const mensagemSaudacao = saudacao("Usuário");
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log(mensagemSaudacao);
