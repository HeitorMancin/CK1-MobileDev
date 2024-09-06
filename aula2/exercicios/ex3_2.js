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
    var Orcamento = /** @class */ (function () {
        function Orcamento(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        Orcamento.prototype.aplicarImpostoEDesconto = function (impostoTaxa, descontoTaxa) {
            var imposto = Financeiro.calcularImposto(this.valorTotal, impostoTaxa);
            var desconto = Financeiro.calcularDesconto(this.valorTotal, descontoTaxa);
            this.valorTotal += imposto - desconto;
        };
        return Orcamento;
    }());
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (Financeiro = {}));
var meuOrcamento = new Financeiro.Orcamento(1000, ['item1', 'item2']);
console.log("Valor Total Inicial: R$".concat(meuOrcamento.valorTotal.toFixed(2)));
meuOrcamento.aplicarImpostoEDesconto(10, 5);
console.log("Valor Total Ap\u00F3s Imposto e Desconto: R$".concat(meuOrcamento.valorTotal.toFixed(2)));
