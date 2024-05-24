// métodos
const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au au");
  },
};
console.log(animal.nome);
animal.latir();

const pessoas = {
  nome: "André",
  alteraNome: function (novo) {
    console.log(pessoas.nome);
    this.nome = novo;
    return this.nome;
  },
};

console.log(pessoas.alteraNome("José Manoel"));
console.log(pessoas.nome);

// prototype
const txt =
  "Vendo a estrutura dos objetos prototype, heranças, propriedades e métodos";
console.log(txt);
console.log(Object.getPrototypeOf(txt));

const decisao = true;
console.log(decisao);
console.log(Object.getPrototypeOf(decisao));

const grana = 12.5;
console.log(grana);
console.log(Object.getPrototypeOf(grana));

const listagem = [1, 2, 3];
console.log(listagem);
console.log(Object.getPrototypeOf(listagem));

const viagens = {
  local: "Argentina",
};
console.log(viagens);
console.log(Object.getPrototypeOf(viagens));

console.log(Object.getPrototypeOf === Object.getPrototypeOf(viagens));

const novaViagem = Object.create(viagens);
console.log(novaViagem);
console.log(novaViagem.local);
console.log(Object.getPrototypeOf(novaViagem) === viagens);

// classes básicas
const cachorros = {
  raca: null,
  patas: 4,
  pelagem: null,
  comportamento: null,
};
console.log(cachorros);

const pastorAlemao = Object.create(cachorros);
console.log(pastorAlemao);
pastorAlemao.raca = "Pastor Alemão";
pastorAlemao.pelagem = "Manto preto";
pastorAlemao.comportamento = "Guarda e compania";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const maltes = Object.create(cachorros);
console.log(maltes);
maltes.raca = "Maltes";
maltes.pelagem = "Branco";
maltes.comportamento = "Compania";
console.log(maltes);
console.log(maltes.patas);

// função como classe - função construtora
const criarMoto = function (fabricante, modelo) {
  const moto = Object.create({});
  moto.fabricante = fabricante;
  moto.modelo = modelo;
  return moto;
};

const ducati = criarMoto("Ducati", "Multistrada");
console.log(ducati);
console.log(Object.getPrototypeOf(ducati));

function Iates(fabricante, pes) {
  this.fabricante = fabricante;
  this.pes = pes;
}
const intermarine = new Iates("Inter Marine", 46);
console.log(intermarine);

Iates.prototype.preco = function () {
  console.log("Milhões !!!");
};

intermarine.preco();
console.log(Iates.prototype);

// classes es6
class Cervejas {
  constructor(fornecedor, tipo) {
    this.fornecedor = fornecedor;
    this.tipo = tipo;
  }
}
const imperio = new Cervejas("Império", "Puro Malte");
console.log(imperio);
console.log(Object.getPrototypeOf(imperio));

class Iphone {
  constructor(geracao, modelo) {
    this.geracao = geracao;
    this.modelo = modelo;
  }

  detalheIphone() {
    this.cor = "Aluminiun";
    console.log(
      `É um Iphone ${this.geracao}, do modelo ${this.modelo} e cor ${this.cor}`
    );
  }
}

const quinze = new Iphone(15, "Pro");

console.log(quinze);
quinze.detalheIphone();

Iphone.memoria = "128G";

const treze = new Iphone(13, "11");
console.log(treze);
console.log(treze.memoria);

Iphone.prototype.memoria = "128G";
console.log(treze.memoria);
console.log(quinze.memoria);

// override
class Imovel {
  constructor(tipo, m2) {
    this.tipo = tipo;
    this.m2 = m2;
    this.valor = function () {
      const custo = m2 * 100;
      return custo;
    };
  }
}
const loft = new Imovel("Loft", 200);
console.log(loft);
console.log(`O ${loft.tipo} tem ${loft.m2} e custa ${loft.valor()}`);
Imovel.prototype.bairro = "Qualquer um !";
console.log(
  `O ${loft.tipo} tem ${loft.m2} , custa ${loft.valor()}, no bairro ${
    Imovel.bairro
  }`
);

const balcony = new Imovel("Balcony", 1000);
console.log(balcony);
console.log(
  `O ${balcony.tipo} tem ${balcony.m2} , custa ${balcony.valor()}, no bairro ${
    balcony.bairro
  }`
);

// symbol
class Aviao {
  constructor(marca, turbina, capacidade) {
    this.marca = marca;
    this.turbina = turbina;
    this.capacidade = capacidade;
  }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 2, 237);
console.log(boeing);
console.log(boeing[asas]);

// getter e setter
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }
  get exibirTITULO() {
    return `Você está lendo: ${this.titulo}`;
  }
  set adicionarTags(tags) {
    const tagsLista = tags.split(", ");
    this.tags = tagsLista;
  }
}

const meuPost = new Post(
  "Diário da volta ao mundo",
  "Aventuras, paisagens e cultura."
);

console.log(meuPost);
console.log(meuPost.exibirTITULO);

meuPost.adicionarTags = "Acampamento, escalada, caiaque";
console.log(meuPost);

// herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas,origem) {
    super (patas,patas);
    this.origem = origem;
  }
}

const loboBrasil = new Lobo(4,"Brasil");
console.log(loboBrasil);
console.log(loboBrasil.patas);

// instance of
console.log (loboBrasil instanceof Lobo);
console.log (Lobo  instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Mamifero);
console.log(new Post("a", "b") instanceof Lobo);