type Aluno = {nome: string, nota: number};

let alunos: Aluno[] = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Carlos", nota: 6.0 },
  { nome: "Mariana", nota: 4.0 },
  { nome: "João", nota: 7.0 },
  { nome: "Beatriz", nota: 5.5 }
];

function verificarSituacao(alunos: Aluno[]) {
  alunos.forEach(aluno => {
    console.log('Nome: ', aluno.nome);
    if (aluno.nota >= 7) {
      console.log('Situacao: Aprovado\n');
    } else if (aluno.nota >= 5) {
      console.log('Situacao: Recuperação\n');
    } else {
      console.log('Situacao: Reprovado\n');
    }
  })
}

verificarSituacao(alunos);