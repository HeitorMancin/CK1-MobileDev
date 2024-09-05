"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    descricao() {
        return `Nome: ${this.nome}\nCargo: ${this.cargo}\nSalário: R$${this.salario.toFixed(2)}`;
    }
}
class Gerente extends Funcionario {
    constructor(nome, cargo, salario, departamento) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }
    descricaoDetalhada() {
        return `${this.descricao()}\nDepartamento: ${this.departamento}`;
    }
}
const funcionario = new Funcionario('Gabriel', 'Engenheiro de Dados', 3500.00);
console.log('Descrição do Funcionário:');
console.log(funcionario.descricao());
const gerente = new Gerente('Anderson', 'Gerente de Dados', 7000.00, 'Dados');
console.log('\nDescrição do Gerente:');
console.log(gerente.descricaoDetalhada());
