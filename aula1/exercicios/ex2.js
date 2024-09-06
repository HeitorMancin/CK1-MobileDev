function exibirInformacoes(filme) {
    return "O filme ".concat(filme.titulo, " foi dirigido por ").concat(filme.diretor, " e publicado em ").concat(filme.anoPublicacao, ".");
}
var livro1 = {
    titulo: "Carros",
    diretor: "John Lassester",
    anoPublicacao: 2006
};
var livro2 = {
    titulo: "Carros 2",
    diretor: "john Lassester",
    anoPublicacao: 2011
};
console.log(exibirInformacoes(livro1));
console.log(exibirInformacoes(livro2));
