"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex3_1_cliente_1 = require("./ex3_1_cliente");
class Pedido {
    constructor(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    exibirInformacoes() {
        console.log(`\nNome do Cliente: ${this.cliente.nome}`);
        console.log(`Produto: ${this.produto}`);
        console.log(`Valor Total: R$${this.valor.toFixed(2)}\n`);
    }
}
const cliente1 = new ex3_1_cliente_1.Cliente('Gabriel Moura', 'gabrielmoura@example.com');
const pedido1 = new Pedido(cliente1, 'MacBook Pro', 8500.00);
pedido1.exibirInformacoes();
const cliente2 = new ex3_1_cliente_1.Cliente('Vinicius Moura', 'vinciusmoura@example.com');
const pedido2 = new Pedido(cliente2, 'MacBook', 7500.00);
pedido2.exibirInformacoes();
