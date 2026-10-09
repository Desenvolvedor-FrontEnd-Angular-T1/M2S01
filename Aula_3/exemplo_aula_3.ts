//Tipo de União: |
let cnpj: string | number;

cnpj = '12345678900001';
cnpj = 12345678900001;
//cnpj = true; //Erro de tipagem

//Tipo Literal
type SituacaoUsuario = 'ativo' | 'inativo' | true | false | 1 | 0;

let situacao: SituacaoUsuario;

situacao = 1;

//Tipo de intersecção: &
let cnpj_2: string & number; //Não funciona para tipos primitivos
//cnpj_2 = 'teste';
//cnpj_2 = 123;

type DadosPessoais = {nome: string, idade: number};
type Endereco = {rua: string, numero: number, cidade: string, estado: string, pais: string};

type PessoaRedundante = {nome: string, idade: number, rua: string, numero: number, cidade: string, estado: string, pais: string};
type Pessoa = DadosPessoais & Endereco;

let pessoa1: PessoaRedundante;
//let pessoa2: Pessoa = {nome: 'Eduardo', idade: 12};

//Interfaces
interface Animal {
  readonly id: number,
  raca: string,
  tamanho: number
}
interface Animal {
  idade: number
}

//"Mesclagem" das Interfaces Animal
let cachorro: Animal = {id: 1, raca: 'Viralata', tamanho: 0.8, idade: 2};

//cachorro.id = 123; //Erro pois não é possível alterar valor de readonly
cachorro.raca = 'Pug';
cachorro.tamanho = 0.4;
cachorro.idade = 10;

//ENUMs
enum Situacao {
  Inativo, //0
  Pendente, //1
  EmProcessamento, //2
  Completo //3
}

enum UsuarioSituacao {
  Inativo = 0,
  Pendente = 'PENDENTE',
  EmProcessamento = 'EMPROCESSAMENTO',
  Completo = 'COMPLETO'
}

let usuario = {nome: 'Eduardo', situacao: 2};

if (usuario.situacao === Situacao.Inativo) {
  console.log('Usuario está inativo')
}

console.log('Inativo:',UsuarioSituacao.Inativo);
console.log('Pendente:',UsuarioSituacao.Pendente);
console.log('EmProcessamento:',UsuarioSituacao.EmProcessamento);
console.log('Inativo:',UsuarioSituacao.Completo);