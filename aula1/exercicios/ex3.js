"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("../../pessoa");
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, curso) {
        var _this = _super.call(this, nome, idade) || this;
        _this.course = curso;
        return _this;
    }
    Aluno.prototype.exibirInformacoes = function () {
        return "Nome: ".concat(this.name, ", Idade: ").concat(this.age, ", Curso: ").concat(this.course);
    };
    return Aluno;
}(pessoa_1.Pessoa));
var aluno1 = new Aluno("Gabriel", 20, "Engenharia da Computacao");
console.log(aluno1.exibirInformacoes());
var aluno2 = new Aluno("Vinicius", 24, "Engenharia Mecanica");
console.log(aluno2.exibirInformacoes());
