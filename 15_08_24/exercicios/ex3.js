"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("../../pessoa");
class Aluno extends pessoa_1.Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.course = curso;
    }
    exibirInformacoes() {
        return `Nome: ${this.name}, Idade: ${this.age}, Curso: ${this.course}`;
    }
}
const aluno1 = new Aluno("Gabriel", 20, "Engenharia da Computacao");
console.log(aluno1.exibirInformacoes());
const aluno2 = new Aluno("Vinicius", 24, "Engenharia Mecanica");
console.log(aluno2.exibirInformacoes());
