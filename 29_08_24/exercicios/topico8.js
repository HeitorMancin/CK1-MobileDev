"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function buscarDadosDaAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const sucesso = Math.random() > 0.5;
                if (sucesso) {
                    resolve('Dados recebidos da API');
                }
                else {
                    reject('Falha ao buscar dados da API');
                }
            }, 2000);
        });
    });
}
function executarBusca() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield buscarDadosDaAPI();
            console.log(dados);
        }
        catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    });
}
executarBusca();
