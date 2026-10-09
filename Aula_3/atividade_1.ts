type Usuario = {id: number, nome: string, ativo: boolean};

let usuarios: Usuario[] = [
  {id: 1, nome: 'Joao', ativo: true},
  {id: 2, nome: 'Luiza', ativo: true},
  {id: 3, nome: 'Maria', ativo: false},
  {id: 5, nome: 'José', ativo: false},
  {id: 6, nome: 'Sebastião', ativo: true},
];

const buscarUsuario = (usuarios: Usuario[], id: number) => {
  const usuario = usuarios.find(usuario => usuario.id === id);
  if (usuario) {
    console.log('ID: ', usuario.id);
    console.log('Nome: ', usuario.nome);
    console.log('Ativo: ', usuario.ativo ? 'Sim' : 'Não');
  } else {
    console.log('Usuário não encontrado');
  }
}

buscarUsuario(usuarios, 1);
buscarUsuario(usuarios, 4);
buscarUsuario(usuarios, 5);