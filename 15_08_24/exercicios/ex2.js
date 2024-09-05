"use strict";
function exibirInformacoes(livro) {
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`;
}
const livro1 = {
    titulo: "The Hunger Games",
    autor: "Suzanne Collins",
    anoPublicacao: 2008
};
const livro2 = {
    titulo: "Catching Fires",
    autor: "Suzanne Collins",
    anoPublicacao: 2009
};
console.log(exibirInformacoes(livro1));
console.log(exibirInformacoes(livro2));
