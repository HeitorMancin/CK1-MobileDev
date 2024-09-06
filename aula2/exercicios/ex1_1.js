function exibirDetalhesCompras(compras) {
    return compras.map(function (compra) {
        return "Produto: ".concat(compra.produto.nome, "\nPre\u00E7o: R$").concat(compra.produto.preco, "\nCategoria: ").concat(compra.produto.categoria, "\nForma de pagamento: ").concat(compra.pagamento);
    }).join('\n\n');
}
var compras = [
    {
        produto: {
            nome: "Kit Moza R9",
            preco: 9000.00,
            categoria: "Eletrônicos"
        },
        pagamento: 'cartão deb'
    },
    {
        produto: {
            nome: "Moletom Ferrari",
            preco: 400.00,
            categoria: "Roupa"
        },
        pagamento: 'dinheiro'
    },
    {
        produto: {
            nome: "Cadeira Gamer",
            preco: 500.00,
            categoria: "Móveis"
        },
        pagamento: 'pix'
    },
    {
        produto: {
            nome: "RTX 4090",
            preco: 8000.00,
            categoria: "Computadores"
        },
        pagamento: 'cartão cred'
    }
];
console.log(exibirDetalhesCompras(compras));
