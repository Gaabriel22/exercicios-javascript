let palavra = prompt("Insira uma palavra aqui:")
let palavraInvertida = ""

for(i = palavra.length - 1; i >= 0 ; i--) {
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!")
} else {
    alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}