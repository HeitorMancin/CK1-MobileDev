"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirDetalhesPessoaEmpregado(pessoaEmpregado) {
    return "Nome: ".concat(pessoaEmpregado.name, "\nIdade: ").concat(pessoaEmpregado.age, "\nEmpresa: ").concat(pessoaEmpregado.empresa, "\nSal\u00E1rio: R$").concat(pessoaEmpregado.salario);
}
var pessoaEmpregado = {
    name: "Gabriel",
    age: 20,
    empresa: "C6 Bank",
    salario: 5000.00
};
console.log(exibirDetalhesPessoaEmpregado(pessoaEmpregado));
