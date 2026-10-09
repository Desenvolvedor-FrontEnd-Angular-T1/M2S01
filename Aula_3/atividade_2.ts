type Produto = {
  id: number,
  nome: string,
  preco: number,
  disponivel: boolean,
  categoria: 'Eletrônicos' | 'Acessórios' | 'Informática'
};

interface Cliente {
  id: number,
  nome: string,
  email?: string,
  ativo: boolean
}

enum StatusPedido {
  Pendente,
  Enviado,
  Entregue
}


type ProdutoIdentificado = Produto & {codigoInterno: string};

interface Pedido {
  readonly id: number,
  cliente: Cliente,
  produtos: Produto[],
  status: StatusPedido,
  valorTotal: number
}

type RegistroAuditoria = [number, string, boolean];

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Mouse',
    preco: 35,
    disponivel: true,
    categoria: "Acessórios"
  },
  {
    id: 2,
    nome: 'Placa Mãe',
    preco: 1560,
    disponivel: false,
    categoria: "Eletrônicos"
  },
];

const clientes: Cliente[] = [
  {
    id: 12,
    nome: 'Mateus',
    email: 'mateus@mail.com',
    ativo: true
  },
  {
    id: 13,
    nome: 'Moises',
    ativo: false
  }
];

const pedidos: Pedido[] = [
  {
    id: 2,
    cliente: {
      id: 13,
      nome: 'Moises',
      ativo: false
    },
    produtos: [
      {
        id: 1,
        nome: 'Mouse',
        preco: 35,
        disponivel: true,
        categoria: "Informática"
      },
      {
        id: 2,
        nome: 'Placa Mãe',
        preco: 1560,
        disponivel: false,
        categoria: "Eletrônicos"
      }
    ],
    status: StatusPedido.Entregue,
    valorTotal: 1595
  },
  {
    id: 132,
    cliente: {
      id: 12,
      nome: 'Mateus',
      email: 'mateus@mail.com',
      ativo: true
    },
    produtos: [
      {
        id: 1,
        nome: 'Mouse',
        preco: 35,
        disponivel: true,
        categoria: "Acessórios"
      }
    ],
    status: StatusPedido.Entregue,
    valorTotal: 35
  }
]