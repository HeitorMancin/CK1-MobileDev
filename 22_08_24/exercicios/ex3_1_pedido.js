"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
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
exports.Pedido = Pedido;
