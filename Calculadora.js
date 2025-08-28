const readline = require('readline-sync');

function menuPrincipal() {
  while (true) {
    console.log('\n--- VAMOS CALCULAR ---');
    console.log('1. Soma');
    console.log('2. Subtração');
    console.log('3. Divisão');
    console.log('4. Multiplicação');
    console.log('5. Sair');
    console.log('----------------------');

    let opcao = readline.question('Escolha uma opção: ');

    if (opcao === '1') {
      let A = parseInt(readline.question("Digite o primeiro valor: "));
      let B = parseInt(readline.question("Digite o segundo valor: "));
      let resultado = A + B;
      console.log(`\nO resultado da soma é: ${resultado}`);
    } else if (opcao === '2') {
      let A = parseInt(readline.question("Digite o primeiro valor: "));
      let B = parseInt(readline.question("Digite o segundo valor: "));
      let resultado = A - B;
      console.log(`\nO resultado da subtração é: ${resultado}`);
    } else if (opcao === '3') {
      let A = parseInt(readline.question("Digite o primeiro valor: "));
      let B = parseInt(readline.question("Digite o segundo valor: "));
      let resultado = A / B;
      console.log(`\nO resultado da divisão é: ${resultado}`);
    } else if (opcao === '4') {
      let A = parseInt(readline.question("Digite o primeiro valor: "));
      let B = parseInt(readline.question("Digite o segundo valor: "));
      let resultado = A * B;
      console.log(`\nO resultado da multiplicação é: ${resultado}`);
    } else if (opcao === '5') {
      console.log('Até mais! Beijocas');
      return;
    } else {
      console.log('Opção inválida. Por favor, escolha de 1 a 5.');
    }
  }
}

menuPrincipal();