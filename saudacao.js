//Declaração da função com pârametro
function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
};

saudacao("Alex");

//função que recebe o valor, soma 1 número e retorno 
function subirDeNivel(nivelAtual) {
    return nivelAtual + 1;
}

let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNivel);
console.log|("Seu nivel atual é: " + nivelAtualizado);

//Função que soma dois números
function soma (numero1, numero2) {
    return numero1 * numero2
};

console.log(soma(5,3))

funstion verificarPar(numero){
    if (numero % 2 === 0 ){
        return "O número é par"
    }
};

console.log(verificarPar(3));