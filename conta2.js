function criarConta(titular, saldoInicial) {
    let saldo = saldoInicial;

return {
    titular,
    depositar(valor) {
        if(valor) {
            console.log("Valor do depósito inválido.");
            return; //Parar o processo.
         }
         saldo += valor;
    },
    Sacar(valor) {
        if (valor >= saldo) {
            console.log("Saque realizado com sucesso!");
            return;
        }
        saldo -= valor;
    },
    get saldoAtual() {
        return saldo;
    },
};  

};

const contas = [criarConta("Alice", 3000), criarConta("carla",1000)];
//                                  0                         1

//contas[0].depositar(-8);
contas[1].Sacar(100);

contas.forEach((conta) => { //forEach > para cada item do array
    console.log(`${conta.titular} tem R$ ${conta.saldoAtual}`);
})