"use strict";
function exibirDetalhesCompras(compras) {
    return compras.map(compra => `Produto: ${compra.produto.nome}\nPreço: R$${compra.produto.preco}\nCategoria: ${compra.produto.categoria}\nForma de pagamento: ${compra.pagamento}`).join('\n\n');
}
const compras = [
    {
        produto: {
            nome: "Smartphone",
            preco: 1500.00,
            categoria: "Eletrônicos"
        },
        pagamento: 'cartão deb'
    },
    {
        produto: {
            nome: "Garrafinha Pacco",
            preco: 200.00,
            categoria: "Garrafa"
        },
        pagamento: 'dinheiro'
    },
    {
        produto: {
            nome: "Cadeira",
            preco: 250.00,
            categoria: "Móveis"
        },
        pagamento: 'pix'
    },
    {
        produto: {
            nome: "MacBook Air",
            preco: 8000.00,
            categoria: "Computadores"
        },
        pagamento: 'cartão cred'
    }
];
console.log(exibirDetalhesCompras(compras));
