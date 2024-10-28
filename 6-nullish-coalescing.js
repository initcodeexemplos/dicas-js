const usuario = { nome: null, idade: undefined };
const nome = usuario.nome ?? 'Anonimo';
const idade = usuario.idade ?? 18;

console.log(nome);
console.log(idade);