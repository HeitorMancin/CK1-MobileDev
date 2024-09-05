import { Cliente } from './ex3_1_cliente'; 

class Pedido {
  cliente: Cliente;
  produto: string;
  valor: number;

  constructor(cliente: Cliente, produto: string, valor: number) {
    this.cliente = cliente;
    this.produto = produto;
    this.valor = valor;
  }


  exibirInformacoes(): void {
    console.log(`\nNome do Cliente: ${this.cliente.nome}`);
    console.log(`Produto: ${this.produto}`);
    console.log(`Valor Total: R$${this.valor.toFixed(2)}\n`);
  }
}

const cliente1 = new Cliente('Gabriel Moura', 'gabrielmoura@example.com');
const pedido1 = new Pedido(cliente1, 'MacBook Pro', 8500.00);

pedido1.exibirInformacoes();

const cliente2 = new Cliente('Vinicius Moura', 'vinciusmoura@example.com');
const pedido2 = new Pedido(cliente2, 'MacBook', 7500.00);

pedido2.exibirInformacoes();