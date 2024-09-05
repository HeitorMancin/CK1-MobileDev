import { Pessoa } from '../../pessoa';
  
class Aluno extends Pessoa {
    course: string;
  
    constructor(nome: string, idade: number, curso: string) {
      super(nome, idade);
      this.course = curso;
    }
  
    exibirInformacoes(): string {
      return `Nome: ${this.name}, Idade: ${this.age}, Curso: ${this.course}`;
    }
}
  
 
const aluno1 = new Aluno("Gabriel", 20, "Engenharia da Computacao");
  console.log(aluno1.exibirInformacoes());

const aluno2 = new Aluno("Vinicius", 24, "Engenharia Mecanica");
  console.log(aluno2.exibirInformacoes());
  