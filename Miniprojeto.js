/* Lista de produtos
Inserir nome, preço e quantidade.
Exibir lista e calcular valor total em estoque. */



const prompt = require('prompt-sync')({ sigint: true });


// array vazio
const produtos = [];

function adicionarItem(item, preco, quantidade) {
  produtos.push({ nome: item, preco: preco, quantidade: quantidade });
  console.log(`${item} adicionado à lista.`);
}

function listarItens() {
  if (produtos.length === 0) {
    console.log("A lista de compras está vazia.");
  } else {
    console.log(" ---Aqui está sua e-Wish List:----- ");
    produtos.forEach((produto, index) => {
      console.log(`- ${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`);
    });

    // Calcula o valor total
    let total = 0;
    produtos.forEach((produto) => {
      total += produto.preco * produto.quantidade;
    });
    console.log(`Valor total da lista: R$ ${total.toFixed(2)}`);
  }
}

// Recebe produtos do usuário
console.log('----------e-Wish List, seja Bem vindo!----------'); 
    function menuPrincipal() {
  while (true) {
    console.log('\n--- MENU DE OPÇÕES ---');
    console.log('1. Adicionar produtos: ');
    console.log('2. Listar produtos');
    console.log('3. Sair');
    console.log('----------------------');

      let opcao = prompt('Escolha uma opção: ');

    if (opcao === '1') { // se 
      let itemAdicionar = prompt('Qual item deseja adicionar? ');
      const preco = parseFloat(prompt('Digite o preço do produto: '));
      const quantidade = parseFloat(prompt('Digite a quantidade do produto: '));
      adicionarItem(itemAdicionar, preco, quantidade);

    } else if (opcao === '2') {
      listarItens();

    } else if (opcao === '3') {
      console.log('Finalizado. Até mais!');
      return;

    } else { // se não for nenhuma das opções, faça isso
      console.log('Opção inválida. Por favor, escolha de 1 a 3.');
    }
  }
}

menuPrincipal();
