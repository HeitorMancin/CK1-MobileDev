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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    Funcionario.prototype.descricao = function () {
        return "Nome: ".concat(this.nome, "\nCargo: ").concat(this.cargo, "\nSal\u00E1rio: R$").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.descricaoDetalhada = function () {
        return "".concat(this.descricao(), "\nDepartamento: ").concat(this.departamento);
    };
    return Gerente;
}(Funcionario));
var funcionario = new Funcionario('Gabriel', 'Engenheiro de Dados', 3500.00);
console.log('Descrição do Funcionário:');
console.log(funcionario.descricao());
var gerente = new Gerente('Anderson', 'Gerente de Dados', 7000.00, 'Dados');
console.log('\nDescrição do Gerente:');
console.log(gerente.descricaoDetalhada());
