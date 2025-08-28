// 1 Iniciar

const readline = require('readline-sync');

// Receber a idade do usuário
// O readline.question() fará o papel do prompt()
let idade = parseInt(readline.question("Digite dua idade: "));
// parseInt é uma função em JS que faz a conversão para número inteiro. 

if (idade >= 21) { 
    console.log("Você é elegivel para carteira de motorista C,D e E");
} else if (idade >= 18) { // S
    console.log("Você é elegivel para carteira de motorista A e B");
} else {
    console.log("Você NÃO tem idade para dirigir");
}
console.log("Idade informada: " + idade);
    

    


