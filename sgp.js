//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos){
    const somarRodada = function(acumulador, pontosDaFase){
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
    return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMissoes) {
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada =  missao.status === "concluida"; //=== igualdade ESTRITA
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);

    return apenasConcluidas;
};

function atualizarInventario(inventarioAtual, acao, nomeDoitem) {
    let novoInventario;

    if(acao ==="pegar") {
        const inventarioComItemNovo = [...inventarioAtual, nomeDoitem];
    } else if (acao ==="destacar") {
        const InventarioSemUltimoItem = inventarioAtual.slice();
    } else {
        novoInventario = inventarioAtual;
    }
    return novoInventario;
};
const pontosDoJogador = [100, 50, 200, 10]
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("Pontuação final: ", total);

const missoes = [
    {nome:"Salvar a aldeia", status: "concluida"},
    {nome:"Encontrar o mapa", status: "em andamento"},
    {nome:"Derrotar o chefe", status: "falhou"},
    {nome:"Coletar recursos", status: "concluida"},
];

const concluida = filtrarMissoesConcluidas(missoes);
console.log("Missões concluídas: ", concluida);

const mochila = ["Mapa", "Lanterna"];
const mochilaAtulizada = atualizarInventario(mochila, "pegar", "Bússola");
console.log("Mochila após pegar:,")