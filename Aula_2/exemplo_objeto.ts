//Exemplo de objeto com tipo inferido
let pessoaUm = {
  nome: 'Eduardo',
  idade: 30,
  profissao: 'Prof'
};

//Exemplo de objeto com tipo declarado
let pessoaDois: { nome: string; idade: number; profissao: string; } = {
  nome: 'João',
  idade: 47,
  profissao: ''
};

//Exemplo de objeto com tipo declarado e propriedade opcional
let pessoaTres: { nome: string; idade: number; profissao?: string; } = {
  nome: 'Maria',
  idade: 27
};

//Exemplo de objeto com tipo inferido
let pessoaQuatro = {
  nome: 'Eduardo',
  profissao: 'Prof'
};