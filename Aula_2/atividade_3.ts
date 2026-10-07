type Produto = {nome: string, dt?: string, preco: number, disponivel: boolean};

let produtos: Produto[] = [
  { nome: "Notebook", preco: 3500, disponivel: true },
  { nome: "Mouse", preco: 80, disponivel: false },
  { nome: "Teclado", preco: 150, disponivel: true },
  { nome: "Monitor", preco: 1200, disponivel: true },
  { nome: "Headset", preco: 250, disponivel: false }
];

function filtrarProdutosDisponíveis(produtos: Produto[]): Produto[] {
  return produtos.filter(p => p.disponivel);
}

function filtrarValorProdutos(produtos: Produto[], valor: number): Produto[] {
  return produtos.filter(p => p.preco <= valor);
}

console.log('Produtos disponíveis: ', filtrarProdutosDisponíveis(produtos));

let valor = 249;
console.log(`Produtos com preços menores ou igual a ${valor}: `, filtrarValorProdutos(produtos, valor));