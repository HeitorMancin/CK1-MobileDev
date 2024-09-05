"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    exibirSaldo() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo, limiteCredito) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }
    exibirSaldo() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo disponível: R$${(this.saldo + this.limiteCredito).toFixed(2)}`);
    }
}
const conta1 = new ContaBancaria('Gabriel Moura', 15000.00);
console.log('\nConta Bancária:');
conta1.exibirSaldo();
const conta2 = new ContaCorrente('Vinicius Souza', 1000.00, 500.00);
console.log('\nConta Corrente:');
conta2.exibirSaldo();
