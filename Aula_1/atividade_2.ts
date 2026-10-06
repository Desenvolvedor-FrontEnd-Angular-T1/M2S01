let produtos: string[] = ['Mouse', 'Teclado', 'Monitor'];
let precos: number[] = [40,55, 350];
let disponiveis: boolean[] = [true, false, true];

for (let x = 0; x < produtos.length; x++) {
  console.log('Produto:', produtos[x]);
  console.log('Preço:', 'R$ ' + precos[x].toFixed(2));
  console.log(disponiveis[x] ? 'Produto disponível pra compra': 'Produto indisponível no momento');
  console.log('\n');
}

