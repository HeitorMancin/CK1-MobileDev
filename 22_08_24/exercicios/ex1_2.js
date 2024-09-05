"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirDetalhesPessoaEmpregado(pessoaEmpregado) {
    return `Nome: ${pessoaEmpregado.name}\nIdade: ${pessoaEmpregado.age}\nEmpresa: ${pessoaEmpregado.empresa}\nSalário: R$${pessoaEmpregado.salario}`;
}
const pessoaEmpregado = {
    name: "Gabriel",
    age: 20,
    empresa: "C6 Bank",
    salario: 5000.00
};
console.log(exibirDetalhesPessoaEmpregado(pessoaEmpregado));
