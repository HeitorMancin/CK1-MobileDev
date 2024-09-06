"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    Pedido.prototype.exibirInformacoes = function () {
        console.log("\nNome do Cliente: ".concat(this.cliente.nome));
        console.log("Produto: ".concat(this.produto));
        console.log("Valor Total: R$".concat(this.valor.toFixed(2), "\n"));
    };
    return Pedido;
}());
exports.Pedido = Pedido;
