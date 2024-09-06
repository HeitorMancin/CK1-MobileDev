import { Cliente } from './ex3_1_cliente';
import { Pedido } from './ex3_1_pedido';

const cliente1 = new Cliente('Heitor Mancini', 'hmancini@fiap.com');
const pedido1 = new Pedido(cliente1, 'Kit Moza R9', 9000.00);
pedido1.exibirInformacoes();

const cliente2 = new Cliente('Maria Eduarda', 'meduarda@fiap.com');
const pedido2 = new Pedido(cliente2, 'Iphone 15', 9000.00);
pedido2.exibirInformacoes();