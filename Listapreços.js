// Criação e Adição
// Começamos com um array vazio produtos e usamos .push() para adicionar objetos simples, cada um com nome e preco.


let lista = []; // Array vazio para a lista

lista.push({ nome: 'Pão', preco: 5.50 });
lista.push({ nome: 'Café', preco: 30.50 });
lista.push({ nome: 'Leite', preco: 5.99 });

console.log("Produtos adicionados à lista.");

console.log('\n--- LISTA DE PRODUTOS ---');

lista.forEach((p,i) => {

console.log(i + 1, p.nome,"-", "R$", p.preco);
});

let total=0
lista.forEach((p) => {
    total += p.preco;    // p é produto
})
    
console.log(`Valor total da lista é: ${total.toFixed(2)}`);  




console.log("-------------------------");