function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}


function saudacao(nome: string): string {
    return "Olá " + nome;
}


const resultadoMultiplicacao: number = multiplicacao(2, 3);
const mensagemSaudacao: string = saudacao("Usuário");

console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log(mensagemSaudacao); 