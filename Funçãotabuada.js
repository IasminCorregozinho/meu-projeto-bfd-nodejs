// crie uma função chamada gerarTabuada
// Ela deve receber um número como parametros (ex: gerarTabuada)
// Dentro da função use um loop (ex: for) para imprimir a tabuada desse número no console
const readline = require('readline-sync');
const numero = parseInt(readline.question("Digite um número de 1 a 10 para ver a tabuada: "));

function gerarTabuada (numero) { 

    console.log(`\nTabuada do ${numero}:`);

    for (let i = 1; i <= 10; i++) {
       const resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);

    };

}
gerarTabuada(numero)

