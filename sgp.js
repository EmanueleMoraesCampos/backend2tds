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
        const foiFinalizada =  missao.status === "concluidas"; //=== igualdade ESTRITA
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas;
};

function atualizarInventario(inventarioAtual, acao, nomeDoitem) {
    let novoInventario;

    if(acao ==="pegar") {
        const inventarioComItemNovo;
    } else if (acao ==="destacar") {
        const InventarioSemUltimoItem = inventarioAtual.slice();
        novoInventario = inventarioAtual;
    }
    return novoInventario;