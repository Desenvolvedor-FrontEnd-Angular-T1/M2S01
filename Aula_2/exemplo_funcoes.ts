//Função utilizando parametro tipado e retorno tipado
function digaTchau(nome: string): string {
  return 'Ola ' + nome;
}

//Função sem parametro tipado, mas com retorno inferido para string devido a concatenação da string 'Ola ' ao nome
function digaOla(nome) {
  console.log('Ola '+ nome);
}

//Função com retorno inferido para any devido a não tipagem do parametro
function retornaNome(nome) {
  return nome;
}

//Função utilizando parametro opcional
function subtracao(a: number, b?: number): number {
  return a + (b ? b : 0);
}
console.log(subtracao(1));
console.log(subtracao(1, 2));

//Função utilizando parametro padrão/default
function multiplicacao(a: number, b = 1) {
  return a * b;
}
console.log(multiplicacao(5));
console.log(multiplicacao(5, 3));

//Função utilizando parametro rest
function soma(...numeros: number[]) {
  let total = 0;
  numeros.forEach(n => total += n);
  return total;
}
console.log(soma(1,2,3));
console.log(soma(4,5,6,7,8,9));
