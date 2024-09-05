interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}
  
function exibirInformacoes(livro: Livro): string {
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`;
}
  
const livro1: Livro = {
    titulo: "The Hunger Games",
    autor: "Suzanne Collins",
    anoPublicacao: 2008
};

const livro2: Livro = {
    titulo: "Catching Fires",
    autor: "Suzanne Collins",
    anoPublicacao: 2009
};
  
console.log(exibirInformacoes(livro1));
console.log(exibirInformacoes(livro2));
  