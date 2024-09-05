"use strict";
var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxa) {
        return valor * (taxa / 100);
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxa) {
        return valor * (taxa / 100);
    }
    Financeiro.calcularDesconto = calcularDesconto;
    class Orcamento {
        constructor(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        aplicarImpostoEDesconto(impostoTaxa, descontoTaxa) {
            const imposto = Financeiro.calcularImposto(this.valorTotal, impostoTaxa);
            const desconto = Financeiro.calcularDesconto(this.valorTotal, descontoTaxa);
            this.valorTotal += imposto - desconto;
        }
    }
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (Financeiro = {}));
const meuOrcamento = new Financeiro.Orcamento(1000, ['item1', 'item2']);
console.log(`Valor Total Inicial: R$${meuOrcamento.valorTotal.toFixed(2)}`);
meuOrcamento.aplicarImpostoEDesconto(10, 5);
console.log(`Valor Total Após Imposto e Desconto: R$${meuOrcamento.valorTotal.toFixed(2)}`);
