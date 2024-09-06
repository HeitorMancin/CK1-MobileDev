class Funcionario {
  nome: string;
  cargo: string;
  salario: number;

  constructor(nome: string, cargo: string, salario: number) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  descricao(): string {
    return `Nome: ${this.nome}\nCargo: ${this.cargo}\nSalário: R$${this.salario.toFixed(2)}`;
  }
}


class Gerente extends Funcionario {
  departamento: string;

  constructor(nome: string, cargo: string, salario: number, departamento: string) {
    super(nome, cargo, salario); 
    this.departamento = departamento;
  }

  descricaoDetalhada(): string {
    return `${this.descricao()}\nDepartamento: ${this.departamento}`;
  }
}



const funcionario = new Funcionario('Heitor', 'Engenheiro de IA', 3000.00);
console.log('Descrição do Funcionário:');
console.log(funcionario.descricao());


const gerente = new Gerente('Eduardo', 'Engenheiro de IA', 3000.00, "IA");
console.log('\nDescrição do Gerente:');
console.log(gerente.descricaoDetalhada());
