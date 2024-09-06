interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

interface Compra{
    produto: Produto;
    pagamento: FormaPagamento;
}
  
type FormaPagamento = 'dinheiro' | 'cartão cred' | 'pix' | 'cartão deb';
  
function exibirDetalhesCompras(compras: Compra[]): string {
    return compras.map(compra => 
        `Produto: ${compra.produto.nome}\nPreço: R$${compra.produto.preco}\nCategoria: ${compra.produto.categoria}\nForma de pagamento: ${compra.pagamento}`
    ).join('\n\n');
  }

const compras: Compra[] = [
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
  

  