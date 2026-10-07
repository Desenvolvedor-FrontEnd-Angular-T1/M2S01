type Usuario = [string, number, boolean];

let usuarioA: Usuario = ['João', 30, true];
let usuarioB: Usuario = ['Maria', 27, true];
let usuarioC: Usuario = ['José', 21, false];

let usuarios: Usuario[] = [usuarioA, usuarioB, usuarioC];

usuarios.forEach(usuario => {
  console.log('Usuário: ', usuario[0]);
  console.log('Idade: ', usuario[1]);
  console.log(usuario[2] ? 'Usuário possui acesso ao sistema\n' : 'Usuário bloqueado\n');
});