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

function Iates(fabricante,pes) {
    this.fabricante = fabricante;
    this.pes = pes;
}
const intermarine = new Iates("Inter Marine",46);
console.log(intermarine);