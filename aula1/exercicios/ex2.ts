interface Filme {
    titulo: string;
    diretor: string;
    anoPublicacao: number;
}
  
function exibirInformacoes(filme: Filme): string {
    return `O filme ${filme.titulo} foi dirigido por ${filme.diretor} e publicado em ${filme.anoPublicacao}.`;
}
  
const livro1: Filme = {
    titulo: "Carros",
    diretor: "John Lassester",
    anoPublicacao: 2006
};

const livro2: Filme = {
    titulo: "Carros 2",
    diretor: "john Lassester",
    anoPublicacao: 2011
};
  
console.log(exibirInformacoes(livro1));
console.log(exibirInformacoes(livro2));
  