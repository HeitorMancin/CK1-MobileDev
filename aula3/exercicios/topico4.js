function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    var maior = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
var maiorNumero = encontrarMaiorElemento([10, 20, 30]);
var maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);
console.log(maiorNumero);
