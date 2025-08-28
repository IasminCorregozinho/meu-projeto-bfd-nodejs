// O Desafio:
// Crie um programa que faça o seguinte:
// Pergunte ao usuário o nome completo.
// Mostre o nome completo em maiúsculas e minúsculas.
// Mostre quantos caracteres o nome completo tem (descontando os espaços em branco).
// Mostre o primeiro nome e o último nome separadamente.


// Para remover espaços, .trim() pode ser útil.
// Para contar caracteres, .length é seu amigo.
// Para quebrar o nome em partes (primeiro, último, etc.), o método .split() é a ferramenta ideal.
// sudo npm install readline-sync (instalar a biblioteca)


const readline = require('readline-sync');


let nome = (readline.question("Qual o seu nome completo: "));


console.log("\nSeu nome completo em MAIÚSCULA é: " + nome.toUpperCase()); // toUpperCase converte as letras para MAIÚSCULA
console.log("Seu nome completo em minúscula é: " + nome.toLowerCase()); // toUpperCase converte as letras para minúscula


let nomeSemEspacos = nome.split(' ').join('');     // join junta tudo em uma unica palavra para contar as letras 
console.log("\nSeu nome completo possui " + nomeSemEspacos.length + " letras") 

let nomeSeparado = nome.split(' '); // .split() Para quebrar o nome em partes (primeiro, último, etc.)
let primeiroNome = nomeSeparado[0]; // 0 para contar a primeira 
let ultimoNome = nomeSeparado[nomeSeparado.length - 1]; // length para contar a ultima posição

console.log("\nSeu primeiro nome é: " + primeiroNome) // sem mais () porque é uma variavel
console.log("\nSeu último nome é: " + ultimoNome)


