let numero = parseFloat(prompt("Digite um número que você deseja calcular a tabuada:"))
let resultados = ""

for(let i = 1; i <= 20; i++) {
    resultados += numero + " x " + i + " = " + (numero * i) + "\n"
}

alert(resultados)