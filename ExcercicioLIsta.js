// push(): Adiciona um ou mais elementos ao final do array.
// .length: Propriedade que retorna o número de elementos no array.
// indexOf(): Retorna o índice da primeira ocorrência de um elemento, ou -1 se não encontrado.
// slice(): Retorna uma cópia rasa de uma parte do array em um novo array, sem modificar o original.
// splice(): Altera o conteúdo de um array removendo, substituindo ou adicionando novos elementos no local.


const readline = require('readline-sync');

let lista = []; // Array vazio para a lista

function adicionarItem(item) {
  lista.push(item);
  console.log(`${item} adicionado à lista.`);
}

function removerItem(item) {
  let itensVerificados = lista.indexOf(item);
  if (itensVerificados > -1) {
    lista.splice(itensVerificados, 1);
    console.log(`${item} removido da lista.`);
  } else {
    console.log(`${item} não encontrado.`);
  }
}

function listarItens() {
  if (lista.length === 0) {
    console.log("A lista de compras está vazia.");
  } else {
    console.log(" -- AQUI ESTÁ SUA LISTA DE COMPRAS -- ");
    for (let i = 0; i < lista.length; i++) {
      console.log(`- ${lista[i]}`);
    }
    console.log("-----------------------");
  }
}

function menuPrincipal() {
  while (true) {
    console.log('\n--- MENU DE OPÇÕES ---');
    console.log('1. Adicionar item');
    console.log('2. Remover item');
    console.log('3. Listar itens');
    console.log('4. Sair');
    console.log('----------------------');

    let opcao = readline.question('Escolha uma opção: ');

    if (opcao === '1') { // se 
      let itemAdicionar = readline.question('Qual item deseja adicionar? ');
      adicionarItem(itemAdicionar);
    } else if (opcao === '2') { // Se não for, então é isso?
      let itemRemover = readline.question('Qual item deseja remover? ');
      removerItem(itemRemover);
    } else if (opcao === '3') {
      listarItens();
    } else if (opcao === '4') {
      console.log('Saindo do programa. Até mais!');
      return;
    } else { // se não for nenhuma das opções, faça isso 
      console.log('Opção inválida. Por favor, escolha de 1 a 4.');
    }
  }
}

// funçaõ menuPrincipal para iniciar o programa
menuPrincipal();